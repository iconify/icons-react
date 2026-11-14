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
		"content": `<style>.g1k4q472x {
  d: path("M7.25 9v6h2C11 15 12 13.75 12 12s-1-3-2.75-3Zm6.5 2.25l3 3.75m0-3.75l-3 3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uh1ab-bsl {
  d: path("M7.5 2.5h9A3.5 3.5 0 0 1 20 6v12a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18V6a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="uh1ab-bsl"/><path class="g1k4q472x"/></g>`,
		"fallback": "uix:diagnosis",
	});
}

export default Component;
