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
		"content": `<style>.hj_ktbcgr {
  d: path("M12 8s-3.5 4-3.5 6.5a3.5 3.5 0 0 0 7 0C15.5 12 12 8 12 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ty04lrhbv {
  d: path("M9.25 5h5.5A5.25 5.25 0 0 1 20 10.25v5.5A5.25 5.25 0 0 1 14.75 21h-5.5A5.25 5.25 0 0 1 4 15.75v-5.5A5.25 5.25 0 0 1 9.25 5m.25 0V3h5v2");
}
</style><g class="hntgybcog"><path class="ty04lrhbv"/><path class="hj_ktbcgr"/></g>`,
		"fallback": "uix:hydrogen-fuel-cell",
	});
}

export default Component;
