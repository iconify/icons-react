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
		"content": `<style>.cj_1dav0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4h10a3 3 0 0 1 3 3v1a2 2 0 0 1-2 2h-4L9 20a1.5 1.5 0 0 1-1.5 1H6.25A1.25 1.25 0 0 1 5 19.75L6.75 10H4a1.5 1.5 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 4 4m16.5-.5v7");
}
</style><path class="cj_1dav0g"/>`,
		"fallback": "uix:basket-handheld-scanner",
	});
}

export default Component;
