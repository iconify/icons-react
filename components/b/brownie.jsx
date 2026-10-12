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
		"content": `<style>.dl0xl9bdl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10.5L7 9l2.5 1L12 8.75l2.5 1L17 8.5l2.5 1.25v8.75a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2Z");
}

.h9qnlab5j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 14h.01m5.99-.75h.01M11.75 17h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="dl0xl9bdl"/><path class="h9qnlab5j"/></g>`,
		"fallback": "iconoven:brownie",
	});
}

export default Component;
