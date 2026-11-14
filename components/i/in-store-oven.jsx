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

.krauzq_cj {
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3");
}

.ta7-tmsrg {
  d: path("M7.75 9h8.5A1.75 1.75 0 0 1 18 10.75v5.5A1.75 1.75 0 0 1 16.25 18h-8.5A1.75 1.75 0 0 1 6 16.25v-5.5A1.75 1.75 0 0 1 7.75 9M6 6h3m3 0h6");
}
</style><g class="hntgybcog"><path class="krauzq_cj"/><path class="ta7-tmsrg"/></g>`,
		"fallback": "uix:in-store-oven",
	});
}

export default Component;
