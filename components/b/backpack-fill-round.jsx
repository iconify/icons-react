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
		"content": `<style>.qj2556zno {
  fill: currentColor;
  d: path("M9 6V5a3 3 0 1 1 6 0v1h1a5 5 0 0 1 5 5v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5v-6a5 5 0 0 1 5-5Zm4-1a1 1 0 0 0-2 0v1h2Zm3 5H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m-1 9a1 1 0 0 0 2 0v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1a1 1 0 0 0 2 0v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1Z");
}
</style><path class="qj2556zno"/>`,
		"fallback": "coolicons:backpack-fill-round",
	});
}

export default Component;
