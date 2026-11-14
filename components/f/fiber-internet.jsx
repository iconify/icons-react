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
		"content": `<style>.fp48tibkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5C2.5 17 4.5 15 8 15m1.5-2.5h2A1.5 1.5 0 0 1 13 14v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 8 16v-2a1.5 1.5 0 0 1 1.5-1.5M13 15h1.25m2.25 0h5m-5.25-2.25l3.75-3m-3.75 7.5l3.75 3");
}
</style><path class="fp48tibkn"/>`,
		"fallback": "uix:fiber-internet",
	});
}

export default Component;
