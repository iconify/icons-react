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

.u856clbvr {
  d: path("M7.125 3h9.75A2.625 2.625 0 0 1 19.5 5.625v4.75A2.625 2.625 0 0 1 16.875 13h-9.75A2.625 2.625 0 0 1 4.5 10.375v-4.75A2.625 2.625 0 0 1 7.125 3M4.5 19.5a7.5 2 0 1 0 15 0a7.5 2 0 1 0-15 0");
}

.w7d0inb0b {
  d: path("m8 10l3-3.25L13.5 9L16 6.5");
}
</style><g class="hntgybcog"><path class="u856clbvr"/><path class="w7d0inb0b"/></g>`,
		"fallback": "uix:hologram",
	});
}

export default Component;
