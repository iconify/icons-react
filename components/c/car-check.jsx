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
		"content": `<style>.dsihjpkri {
  d: path("M4.5 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2.75 5l2 2L21 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tclwrnb2b {
  d: path("M4.5 13H3v-3q0-1 1-1.25l2.5-.5L8.75 4.5H14l3 3.75l2.5.5q1 .25 1 1.25v3H16m-7.5 0H12");
}
</style><g class="hntgybcog"><path class="tclwrnb2b"/><path class="dsihjpkri"/></g>`,
		"fallback": "uix:car-check",
	});
}

export default Component;
