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

.r8lzh1ntv {
  d: path("M7.75 8.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M6.5 15.5h11m-2 2l2-15");
}

.yomqa9b0u {
  d: path("m5.5 10l2 11.5h9l2-11.5");
}
</style><g class="hntgybcog"><path class="yomqa9b0u"/><path class="r8lzh1ntv"/></g>`,
		"fallback": "uix:ice-cream-float",
	});
}

export default Component;
