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
		"content": `<style>.ezv3tmubj {
  d: path("M13.5 8.5H15a3.5 3.5 0 0 1 0 7h-1.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s932zzm1x {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5M6.5 8.5v7m4-7v7m-4-3.5h4");
}
</style><g class="hntgybcog"><path class="s932zzm1x"/><path class="ezv3tmubj"/></g>`,
		"fallback": "uix:hd-badge",
	});
}

export default Component;
