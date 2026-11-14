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
		"content": `<style>.h0-c0rbhz {
  d: path("M4.25 9.5a5.75 5.75 0 0 0 11.5 0M10 15.25v6.25m-3.5 0h5.9m2.35-2a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0v-5m0 0L21 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xppz9ovei {
  d: path("M10 2.5za3 3 0 0 1 3 3v3a3 3 0 0 1-3 3a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3");
}
</style><g class="hntgybcog"><path class="xppz9ovei"/><path class="h0-c0rbhz"/></g>`,
		"fallback": "uix:charity-concert",
	});
}

export default Component;
