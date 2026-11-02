import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ycjrhkbnm {
  fill: currentColor;
  d: path("M12 8a5 5 0 0 1 10 0v8a5 5 0 0 1-9.584 2H7A5 5 0 0 1 7 8Zm5.01-1H17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M12 16v-6H7a3 3 0 1 0 0 6Zm6 0v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0m-9 3a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="ycjrhkbnm"/>`,
		"fallback": "coolicons:desktop-tower-fill-round",
	});
}

export default Component;
