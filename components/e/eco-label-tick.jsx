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

.jn1_vmb2a {
  d: path("M9.25 15.5v5.75L12 19.5l2.75 1.75V15.5M9 9.75l2 2l4-4.25");
}

.r7bsc7b6t {
  d: path("M5.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0");
}
</style><g class="hntgybcog"><path class="r7bsc7b6t"/><path class="jn1_vmb2a"/></g>`,
		"fallback": "uix:eco-label-tick",
	});
}

export default Component;
