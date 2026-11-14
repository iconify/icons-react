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
		"content": `<style>.hfl_5ybep {
  d: path("M5.75 16.5q1.75 2.25 3.75.25q2.5 2.25 5 0q2 2 4.25-.25M15 6h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wqcjb5q_p {
  d: path("M10 14V9c0-3.5 1.5-6 4.5-6c2 0 3.25 1 3.75 2.5c1.75.25 2.75 1.75 2.25 4c-.5-.75-1.25-1-2.25-1c-1.25.25-3.75 1-3.75 2.5v3M4 21.5c0-4 2.5-7.5 6-7.5h4.5c3.5 0 6 3.5 6 7.5");
}
</style><g class="hntgybcog"><path class="wqcjb5q_p"/><path class="hfl_5ybep"/></g>`,
		"fallback": "uix:condor",
	});
}

export default Component;
