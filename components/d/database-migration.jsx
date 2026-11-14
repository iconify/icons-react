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
		"content": `<style>.hjeixgbjr {
  d: path("M2.5 12A5.25 2.75 0 0 0 13 12m2.75 4.25h5.75m-2-2l2 2m0 3.5h-5.75m2 2l-2-2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m5knx8bqc {
  d: path("M2.5 5.25a5.25 2.75 0 1 0 10.5 0a5.25 2.75 0 1 0-10.5 0");
}

.s_oqfiblw {
  d: path("M2.5 5.25v13.5a5.25 2.75 0 0 0 10.5 0V5.25");
}
</style><g class="hntgybcog"><path class="m5knx8bqc"/><path class="s_oqfiblw"/><path class="hjeixgbjr"/></g>`,
		"fallback": "uix:database-migration",
	});
}

export default Component;
