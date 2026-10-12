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

.n96xe8b-x {
  d: path("M3.25 20.65V10.6q0-.6.37-1.07l2.26-2.81q.37-.47.74 0l2.26 2.81q.37.47.37 1.07v10.05q0 .6-.6.6h-4.8q-.6 0-.6-.6m6 0V13.1q0-.6.46-.98l4.83-3.99q.46-.38.92 0l4.83 3.99q.46.38.46.98v7.55q0 .6-.6.6H9.85q-.6 0-.6-.6m-3-14.4v-3.5M5 4h2.5m-1.25 8v2.5M15 11.75v1.5");
}

.ri_703b-f {
  d: path("M13.25 21.25V18.5a1.75 1.75 0 0 1 3.5 0v2.75");
}
</style><g class="hntgybcog"><path class="n96xe8b-x"/><path class="ri_703b-f"/></g>`,
		"fallback": "iconoven:church-building",
	});
}

export default Component;
