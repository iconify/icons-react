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

.nqavb-3dj {
  d: path("M2.5 14.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0m13 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M5 5.5h4.5m5 0H19");
}

.vmivfebxr {
  d: path("M4.25 8.25h15.5A1.75 1.75 0 0 1 21.5 10a1.75 1.75 0 0 1-1.75 1.75H4.25A1.75 1.75 0 0 1 2.5 10a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="vmivfebxr"/><path class="nqavb-3dj"/></g>`,
		"fallback": "uix:hoverboard",
	});
}

export default Component;
