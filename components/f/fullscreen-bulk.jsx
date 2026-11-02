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
		"content": `<style>.m6jkovbup {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h3a1 1 0 0 1 0 2H5a.997.997 0 0 0-1 1v3a1 1 0 0 1-2 0Zm17-3a3 3 0 0 1 3 3v3a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1h-3a1 1 0 0 1 0-2ZM5 22a3 3 0 0 1-3-3v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 1 1h3a1 1 0 0 1 0 2Zm17-3a3 3 0 0 1-3 3h-3a1 1 0 0 1 0-2h3a1 1 0 0 0 1-1v-3a1 1 0 0 1 2 0Z");
}
</style><path class="m6jkovbup"/>`,
		"fallback": "coolicons:fullscreen-bulk",
	});
}

export default Component;
