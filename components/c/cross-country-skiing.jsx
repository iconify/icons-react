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

.i3nyh2u6l {
  d: path("m14.75 7.5l-4.25 4.75l2.25 3.5L12 20.5m-1.5-8.25L8 16l-3.25 3M14 8.5l4.5 2l-4 8.75M14 8.5l-5.5.25l-5 8.25m6 4.25h7M2.75 20.5l4.5.75");
}

.w76keffup {
  cx: 16px;
  cy: 4.75px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="w76keffup"/><path class="i3nyh2u6l"/></g>`,
		"fallback": "iconoven:cross-country-skiing",
	});
}

export default Component;
