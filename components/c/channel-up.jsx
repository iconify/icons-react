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

.j_58beb3y {
  d: path("m8.5 16l3.5-3.5l3.5 3.5");
}

.zo1_i7b-o {
  d: path("M6.875 7.5h10.25a4.375 4.375 0 0 1 4.375 4.375v4.75A4.375 4.375 0 0 1 17.125 21H6.875A4.375 4.375 0 0 1 2.5 16.625v-4.75A4.375 4.375 0 0 1 6.875 7.5M8 2.5l4 5l4-5");
}
</style><g class="hntgybcog"><path class="zo1_i7b-o"/><path class="j_58beb3y"/></g>`,
		"fallback": "uix:channel-up",
	});
}

export default Component;
