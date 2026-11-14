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
		"content": `<style>.ccp7upbrb {
  d: path("M7 12V7.5a5 5 0 0 1 10 0V12M4 15.75h16");
}

.eo7spyy2f {
  d: path("M5.085 12h13.83a1.75 1.75 0 0 1 1.625 2.4l-1.6 4a1.75 1.75 0 0 1-1.625 1.1H6.685a1.75 1.75 0 0 1-1.625-1.1l-1.6-4A1.75 1.75 0 0 1 5.085 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="eo7spyy2f"/><path class="ccp7upbrb"/></g>`,
		"fallback": "uix:garden-trug",
	});
}

export default Component;
