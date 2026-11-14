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
		"content": `<style>.aflf73b6a {
  d: path("M4 21.5v-17a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hz-l25qmm {
  d: path("M8.75 5.5h3.5A1.75 1.75 0 0 1 14 7.25A1.75 1.75 0 0 1 12.25 9h-3.5A1.75 1.75 0 0 1 7 7.25A1.75 1.75 0 0 1 8.75 5.5");
}

.z_6415bmg {
  d: path("m14 7.25l3.25 4.5l-6.75 1.5");
}
</style><g class="hntgybcog"><path class="aflf73b6a"/><path class="hz-l25qmm"/><path class="z_6415bmg"/></g>`,
		"fallback": "uix:door-closer",
	});
}

export default Component;
