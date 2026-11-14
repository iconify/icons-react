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
		"content": `<style>.aisdlgbye {
  d: path("M5.25 19.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m10.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m2.25-16l3 1.25v2.25c0 1.75-1.25 2.75-3 3.5c-1.75-.75-3-1.75-3-3.5V4.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rl9n_bbeb {
  d: path("M5.125 8h6.25A2.625 2.625 0 0 1 14 10.625v4.25a2.625 2.625 0 0 1-2.625 2.625h-6.25A2.625 2.625 0 0 1 2.5 14.875v-4.25A2.625 2.625 0 0 1 5.125 8M14 11h4l3.5 3.5v3H14");
}
</style><g class="hntgybcog"><path class="rl9n_bbeb"/><path class="aisdlgbye"/></g>`,
		"fallback": "uix:business-goods-in-transit",
	});
}

export default Component;
