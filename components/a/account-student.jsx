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

.quk2zcvog {
  d: path("M7 12.5V17c2.5 2 7.5 2 10 0v-4.5");
}

.w-m366bmq {
  d: path("m12.728 5.405l5.912 3.284a1.5 1.5 0 0 1 0 2.622l-5.912 3.284a1.5 1.5 0 0 1-1.456 0L5.36 11.311a1.5 1.5 0 0 1 0-2.622l5.912-3.284a1.5 1.5 0 0 1 1.456 0");
}
</style><g class="hntgybcog"><path class="w-m366bmq"/><path class="quk2zcvog"/></g>`,
		"fallback": "uix:account-student",
	});
}

export default Component;
