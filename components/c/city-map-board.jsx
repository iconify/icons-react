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

.j6eq4wbvs {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v7a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V6A3.5 3.5 0 0 1 6 2.5m6 14v5");
}

.p-iuzlb_d {
  d: path("M2.5 8.5c3 0 4.5 3.5 6 8m7.5-4s-2.25-2.25-2.25-4a2.25 2.25 0 0 1 4.5 0c0 1.75-2.25 4-2.25 4");
}
</style><g class="hntgybcog"><path class="j6eq4wbvs"/><path class="p-iuzlb_d"/></g>`,
		"fallback": "uix:city-map-board",
	});
}

export default Component;
