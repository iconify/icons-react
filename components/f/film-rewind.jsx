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
		"content": `<style>.wcclk2b0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 5.5h4.75A2.625 2.625 0 0 1 13 8.125v8.75a2.625 2.625 0 0 1-2.625 2.625h-4.75A2.625 2.625 0 0 1 3 16.875v-8.75A2.625 2.625 0 0 1 5.625 5.5M7.25 3h1.5A1.25 1.25 0 0 1 10 4.25A1.25 1.25 0 0 1 8.75 5.5h-1.5A1.25 1.25 0 0 1 6 4.25A1.25 1.25 0 0 1 7.25 3M21 12h-5m2-2.5L16 12l2 2.5");
}
</style><path class="wcclk2b0y"/>`,
		"fallback": "uix:film-rewind",
	});
}

export default Component;
