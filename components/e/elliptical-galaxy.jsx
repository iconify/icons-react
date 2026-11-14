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

.mmxhfb3ym {
  d: path("M5.5 12a6.5 4.25 0 1 0 13 0a6.5 4.25 0 1 0-13 0m6.5 0h.01");
}

.qnmnr3itf {
  d: path("M2.25 12a9.75 7 0 1 0 19.5 0a9.75 7 0 1 0-19.5 0");
}
</style><g class="hntgybcog"><path class="qnmnr3itf"/><path class="mmxhfb3ym"/></g>`,
		"fallback": "uix:elliptical-galaxy",
	});
}

export default Component;
