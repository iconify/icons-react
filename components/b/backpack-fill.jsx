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
		"content": `<style>.pxqcyn49p {
  fill: currentColor;
  d: path("M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h1a5 5 0 0 1 5 5v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a5 5 0 0 1 5-5Zm4-2h-2v2h2Zm3 6H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m-1 9a1 1 0 0 0 2 0v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2a1 1 0 0 0 2 0v-2h6Z");
}
</style><path class="pxqcyn49p"/>`,
		"fallback": "coolicons:backpack-fill",
	});
}

export default Component;
