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
		"content": `<style>.cg1z511gt {
  d: path("M8 17q1-1.5 2 0t2 0t2 0t2 0");
}

.e-4_6ot4v {
  d: path("M3 9.5C3 6 6.5 4 12 4s9 2 9 5.5l-2.5 3H16L15 10H9l-1 2.5H5.5Zm5 3h8a3.5 3.5 0 0 1 3.5 3.5v1.5A3.5 3.5 0 0 1 16 21H8a3.5 3.5 0 0 1-3.5-3.5V16A3.5 3.5 0 0 1 8 12.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e-4_6ot4v"/><path class="cg1z511gt"/></g>`,
		"fallback": "uix:cabin-interphone",
	});
}

export default Component;
