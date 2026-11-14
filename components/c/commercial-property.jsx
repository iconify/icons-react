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
		"content": `<style>.brmmdbeqt {
  d: path("M10 12.5h4a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 19v-5a1.5 1.5 0 0 1 1.5-1.5");
}

.h4rx44bnm {
  d: path("M6.625 8h10.75A2.625 2.625 0 0 1 20 10.625v7.25a2.625 2.625 0 0 1-2.625 2.625H6.625A2.625 2.625 0 0 1 4 17.875v-7.25A2.625 2.625 0 0 1 6.625 8M3 8l2-4h14l2 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h4rx44bnm"/><path class="brmmdbeqt"/></g>`,
		"fallback": "uix:commercial-property",
	});
}

export default Component;
