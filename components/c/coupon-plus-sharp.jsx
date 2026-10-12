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
		"content": `<style>.nfu5cdcdo {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 9.75h.01m4.49 4.5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.yvsk4fb2v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.75v-2h18.5V9.5a2.5 2.5 0 0 0 0 5v3.75H2.75V14.5a2.5 2.5 0 0 0 0-5Zm7 6.5l4.5-4.5");
}
</style><g class="ux2u0rbkq"><path class="yvsk4fb2v"/><path class="nfu5cdcdo"/></g>`,
		"fallback": "iconoven:coupon-plus-sharp",
	});
}

export default Component;
