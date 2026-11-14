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
		"content": `<style>.a-dlz26dw {
  d: path("M18 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0M4 15v6m16-6v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mw9mdmb0v {
  d: path("M6 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4-1a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 1a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3 3a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.qd09u-bee {
  d: path("M3 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.ryn039bva {
  d: path("M2 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="ryn039bva"/><path class="qd09u-bee"/><path class="mw9mdmb0v"/><path class="a-dlz26dw"/></g>`,
		"fallback": "uix:balloon-arch",
	});
}

export default Component;
