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
		"content": `<style>.e23gtfbbx {
  d: path("m3.5 8l6 1h6.75l-2.75 3H9Zm12.75 1.5l5.25-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mw27kbbzb {
  d: path("m6 15l3-3m9 3l-2.5-8.5h-2");
}

.wq7dfdc_q {
  d: path("M2.5 15a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m12 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}
</style><g class="hntgybcog"><path class="wq7dfdc_q"/><path class="mw27kbbzb"/><path class="e23gtfbbx"/></g>`,
		"fallback": "uix:enduro-bike",
	});
}

export default Component;
