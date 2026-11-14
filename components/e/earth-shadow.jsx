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

.nlmwa6bpu {
  d: path("M3 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}

.oiqxm-y6u {
  d: path("M11.25 7.25L20 12l-8.75 4.75M8.5 6.5v11");
}
</style><g class="hntgybcog"><path class="nlmwa6bpu"/><path class="oiqxm-y6u"/></g>`,
		"fallback": "uix:earth-shadow",
	});
}

export default Component;
