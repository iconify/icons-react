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
		"content": `<style>.goo_0kboz {
  d: path("M4.75 9h14.5A1.75 1.75 0 0 1 21 10.75v7.5A1.75 1.75 0 0 1 19.25 20H4.75A1.75 1.75 0 0 1 3 18.25v-7.5A1.75 1.75 0 0 1 4.75 9M2.5 3.5h19M7 3.5V9m10-5.5V9M6.5 14.5h11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lqsvcdcna {
  d: path("m14.5 11.75l3 2.75l-3 2.75");
}
</style><g class="hntgybcog"><path class="goo_0kboz"/><path class="lqsvcdcna"/></g>`,
		"fallback": "uix:aisle-sign",
	});
}

export default Component;
