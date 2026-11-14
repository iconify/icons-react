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

.i849xxjwc {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M6 11V9.5a1.5 1.5 0 0 1 3 0V11m-3.5 0h4v3h-4Z");
}

.zvbvu8bkv {
  d: path("M5.125 5.5h6.75A2.625 2.625 0 0 1 14.5 8.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-6.75A2.625 2.625 0 0 1 2.5 13.875v-5.75A2.625 2.625 0 0 1 5.125 5.5m9.375 3h4l3 3.5v4.5h-7");
}
</style><g class="hntgybcog"><path class="zvbvu8bkv"/><path class="i849xxjwc"/></g>`,
		"fallback": "uix:bonded-transport",
	});
}

export default Component;
