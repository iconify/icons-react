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

.n_8_jm1kv {
  d: path("M5.625 2.5h6.75A2.625 2.625 0 0 1 15 5.125v10.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 3 15.875V5.125A2.625 2.625 0 0 1 5.625 2.5M9 2.5v16m-4 0V21m8-2.5V21m2-7h2a3 3 0 0 0 3-3v-.5");
}

.pazxd4gtb {
  fill: currentColor;
  d: path("M18.75 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="n_8_jm1kv"/><path class="pazxd4gtb"/></g>`,
		"fallback": "uix:fibre-cabinet",
	});
}

export default Component;
