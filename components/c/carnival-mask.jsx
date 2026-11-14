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

.q89clpbfj {
  d: path("M2.5 6C6 5 9 6 12 7.5C15 6 18 5 21.5 6c0 4-2.5 7.5-6 7.5c-2 0-2.75-1.5-3.5-2.5c-.75 1-1.5 2.5-3.5 2.5c-3.5 0-6-3.5-6-7.5m15.75 6.75l1.5 7.75");
}

.rsd9o1b2m {
  d: path("M5.75 9a2.25 1.5 0 1 0 4.5 0a2.25 1.5 0 1 0-4.5 0m8 0a2.25 1.5 0 1 0 4.5 0a2.25 1.5 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="q89clpbfj"/><path class="rsd9o1b2m"/></g>`,
		"fallback": "uix:carnival-mask",
	});
}

export default Component;
