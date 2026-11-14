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
		"content": `<style>.gjzf_kbnd {
  d: path("M13 11.75a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0m0 5.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0m-10-5.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0m0 5.5a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sv5_a61rn {
  d: path("M9.5 2.5h5m-2.5 0V12m-2.5 2.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="sv5_a61rn"/><path class="gjzf_kbnd"/></g>`,
		"fallback": "uix:fan-ceiling",
	});
}

export default Component;
