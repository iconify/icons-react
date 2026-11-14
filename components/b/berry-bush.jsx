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

.qcydkvbdd {
  d: path("M4.5 18.5A3.5 3.5 0 0 1 8 12a4 4 0 0 1 8 0a3.5 3.5 0 0 1 3.5 6.5Zm7.5 0V21");
}

.s6ecrdblg {
  d: path("M3.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6.5 3.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="qcydkvbdd"/><path class="s6ecrdblg"/></g>`,
		"fallback": "uix:berry-bush",
	});
}

export default Component;
