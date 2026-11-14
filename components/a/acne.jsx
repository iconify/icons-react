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
		"content": `<style>.e3c7f4f_z {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M9 11h.01M15 11h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.puntk2b8v {
  d: path("M10 16q2 1.25 4 0M8.75 6.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m3 7.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="e3c7f4f_z"/><path class="puntk2b8v"/></g>`,
		"fallback": "uix:acne",
	});
}

export default Component;
