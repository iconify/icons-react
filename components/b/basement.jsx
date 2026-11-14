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
		"content": `<style>.bat9sxb8t {
  d: path("M10.5 13v-3h3v3M7 15.75h10a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20v-2.75a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q2fnsdbyd {
  d: path("m5.611 7.976l5.25-4.5a1.75 1.75 0 0 1 2.278 0l5.25 4.5A1.75 1.75 0 0 1 19 9.305v1.945A1.75 1.75 0 0 1 17.25 13H6.75A1.75 1.75 0 0 1 5 11.25V9.305a1.75 1.75 0 0 1 .611-1.329M2.5 13h19");
}
</style><g class="hntgybcog"><path class="q2fnsdbyd"/><path class="bat9sxb8t"/></g>`,
		"fallback": "uix:basement",
	});
}

export default Component;
