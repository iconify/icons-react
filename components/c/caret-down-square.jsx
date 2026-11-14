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
		"content": `<style>.fg63i5-1x {
  d: path("M10.839 13.831L9.504 12.2a1.5 1.5 0 0 1 1.161-2.45h2.67a1.5 1.5 0 0 1 1.161 2.45l-1.335 1.631a1.5 1.5 0 0 1-2.322 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mtvi81ccy {
  d: path("M9.625 3.5h4.75A6.125 6.125 0 0 1 20.5 9.625v4.75a6.125 6.125 0 0 1-6.125 6.125h-4.75A6.125 6.125 0 0 1 3.5 14.375v-4.75A6.125 6.125 0 0 1 9.625 3.5");
}
</style><g class="hntgybcog"><path class="mtvi81ccy"/><path class="fg63i5-1x"/></g>`,
		"fallback": "uix:caret-down-square",
	});
}

export default Component;
