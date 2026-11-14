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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.qe-fe1b7n {
  d: path("M6.75 7.5q1.75-2.5 3.5 0m3.5 0q1.75-2.5 3.5 0M8.5 11h.01m6.99 0h.01m-5.26 5.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="qe-fe1b7n"/></g>`,
		"fallback": "uix:eyebrows-raised",
	});
}

export default Component;
