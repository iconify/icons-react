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

.jzp_zcb-g {
  d: path("M6.25 10.25C4 9 3 6.5 4 3.5m4 13.25L6.5 20m9.5-3.25l3 3m-1.75-6h.01");
}

.k0gusib7z {
  d: path("M7 9.5c3 0 6 1.5 8.5 2.75l1-2.25l1.25 2l1.5-1l.5 2.75c1 1.5.25 3-1.5 3H9.5c-2.5 0-4-2.25-3.75-4.75c.1-1.5.5-2.5 1.25-2.5");
}
</style><g class="hntgybcog"><path class="k0gusib7z"/><path class="jzp_zcb-g"/></g>`,
		"fallback": "uix:cat-pounce",
	});
}

export default Component;
