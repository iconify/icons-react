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

.v6fz7nsrp {
  d: path("M9.25 16a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M12 16l1.25-1.25");
}

.ztuigcq9k {
  d: path("M6 8.25c1-3 3.25-4.75 6-4.75s5 1.75 6 4.75Zm-2.25 0h16.5m-8.25 0v2.5m-6 0h12q1 0 1.14.99l1.22 8.52q.14.99-.86.99h-15q-1 0-.86-.99l1.22-8.52Q5 10.75 6 10.75");
}
</style><g class="hntgybcog"><path class="ztuigcq9k"/><path class="v6fz7nsrp"/></g>`,
		"fallback": "iconoven:grain-scale",
	});
}

export default Component;
