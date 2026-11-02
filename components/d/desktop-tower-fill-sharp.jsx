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
		"content": `<style>.id-8k1ham {
  fill: currentColor;
  d: path("M12 18H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h9V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Zm5.01-11H17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M12 10H4v6h8Zm6 6v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0m-9 3a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="id-8k1ham"/>`,
		"fallback": "coolicons:desktop-tower-fill-sharp",
	});
}

export default Component;
