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
		"content": `<style>.g3zsjtbwt {
  d: path("M6 3h11.5a2.75 5 0 0 1 0 10H6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u0f8zmbjv {
  d: path("M20.25 8v12.5H6V13");
}

.v_roqnvgw {
  d: path("M3.25 8a2.75 5 0 1 0 5.5 0a2.75 5 0 1 0-5.5 0");
}
</style><g class="hntgybcog"><path class="v_roqnvgw"/><path class="g3zsjtbwt"/><path class="u0f8zmbjv"/></g>`,
		"fallback": "uix:canvas-roll",
	});
}

export default Component;
