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

.n0q0gac6b {
  fill: currentColor;
  d: path("M16.5 14.25h3v2.25h2.25v3H19.5v2.25h-3V19.5h-2.25v-3h2.25Z");
}

.pbd3t5bfv {
  d: path("m2.5 9.5l8-6.75l8 6.75");
}

.sm_53brtg {
  d: path("M4.5 7.75v9.75c0 1.1.9 2 2 2h4.99m5.01-8.031V7.75M10.75 5.5L9.25 9l2.25 2.5L9.75 15");
}
</style><g class="hntgybcog"><path class="pbd3t5bfv"/><path class="sm_53brtg"/><path class="n0q0gac6b"/></g>`,
		"fallback": "uix:disaster-medical",
	});
}

export default Component;
