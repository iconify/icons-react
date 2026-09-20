import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.du8bhdc0j {
  fill: currentColor;
  d: path("m191.83 51.48l13.83-13.82a8 8 0 0 0-11.32-11.32L179.79 40.9a87.81 87.81 0 0 0-103.58 0L61.66 26.34a8 8 0 0 0-11.32 11.32l13.83 13.82A87.72 87.72 0 0 0 40 112v40a88 88 0 0 0 176 0v-40a87.72 87.72 0 0 0-24.17-60.52M128 40a72.08 72.08 0 0 1 72 72v8H56v-8a72.08 72.08 0 0 1 72-72m16 52a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-56 0a12 12 0 1 1 12 12a12 12 0 0 1-12-12");
}
</style><path class="du8bhdc0j"/>`,
		"fallback": "ph:bug-droid-fill",
	});
}

export default Component;
