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

.pwso4kaoa {
  d: path("M3 13h5l4 2h4.5a1.5 1.5 0 0 1 0 3h-5");
}

.w-07libnq {
  d: path("M3 21h11l7-5m-7-5.5L10.5 7A2 2 0 0 1 14 4.5A2 2 0 0 1 17.5 7Z");
}
</style><g class="hntgybcog"><path class="pwso4kaoa"/><path class="w-07libnq"/></g>`,
		"fallback": "uix:food-waste-donation",
	});
}

export default Component;
