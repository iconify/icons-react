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
		"content": `<style>.c023zv93b {
  d: path("m3.464 18.379l5.17-11.375a1.5 1.5 0 0 1 2.732 0l5.17 11.375A1.5 1.5 0 0 1 15.17 20.5H4.83a1.5 1.5 0 0 1-1.366-2.121");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p6tt7ox7e {
  d: path("m6.75 11l1.75 1.75l1.5-1.5l1.75 1.5l1.5-1.75m6 6.5V4M17 6.25L19.25 4l2.25 2.25");
}
</style><g class="hntgybcog"><path class="c023zv93b"/><path class="p6tt7ox7e"/></g>`,
		"fallback": "uix:elevation-gain",
	});
}

export default Component;
