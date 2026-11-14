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
		"content": `<style>.ffou5dbjx {
  d: path("M4 2.5h2.5v2H14V11c0 1.5 1 2.25 2.5 2.75l1.75.5a2.5 2.5 0 0 1 1.75 2.5v3.75H4Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kksvvuvhd {
  d: path("M9 4.5v5a1.5 1.5 0 0 0 3 0v-5M4 17.75h16");
}
</style><g class="hntgybcog"><path class="ffou5dbjx"/><path class="kksvvuvhd"/></g>`,
		"fallback": "uix:chelsea-boot",
	});
}

export default Component;
