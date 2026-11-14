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
		"content": `<style>.wpqjthylt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 10h1.5a1.75 1.75 0 0 1 1.75 1.75v3.5A1.75 1.75 0 0 1 5.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 4.25 10m7 0h1.5a1.75 1.75 0 0 1 1.75 1.75v3.5A1.75 1.75 0 0 1 12.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 11.25 10m7 0h1.5a1.75 1.75 0 0 1 1.75 1.75v3.5A1.75 1.75 0 0 1 19.75 17h-1.5a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 18.25 10M5 10V5.5h14V10m-7-4.5V10");
}
</style><path class="wpqjthylt"/>`,
		"fallback": "uix:flat-organization",
	});
}

export default Component;
