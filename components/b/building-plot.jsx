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
		"content": `<style>.l1f-3h4bw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5V3h3.5m11 0H21v3.5m0 11V21h-3.5m-11 0H3v-3.5M10 3h4m7 7v4m-7 7h-4m-7-7v-4m3.5 8V5.5m1.886.503l1.864.497a1.035 1.035 0 0 1 0 2l-1.864.497A1.5 1.5 0 0 1 6.5 7.548v-.096a1.5 1.5 0 0 1 1.886-1.449");
}
</style><path class="l1f-3h4bw"/>`,
		"fallback": "uix:building-plot",
	});
}

export default Component;
