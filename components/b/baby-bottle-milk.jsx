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
		"content": `<style>.uz4et5xlx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 6c0-2 .75-3.5 2-3.5S14 4 14 6M9.5 6h5A1.5 1.5 0 0 1 16 7.5A1.5 1.5 0 0 1 14.5 9h-5A1.5 1.5 0 0 1 8 7.5A1.5 1.5 0 0 1 9.5 6m1.875 3h1.25A4.375 4.375 0 0 1 17 13.375v3.75a4.375 4.375 0 0 1-4.375 4.375h-1.25A4.375 4.375 0 0 1 7 17.125v-3.75A4.375 4.375 0 0 1 11.375 9M7 14.5h10");
}
</style><path class="uz4et5xlx"/>`,
		"fallback": "uix:baby-bottle-milk",
	});
}

export default Component;
