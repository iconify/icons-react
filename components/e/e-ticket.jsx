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
		"content": `<style>.h657nfb1t {
  d: path("m8 14.5l2-2.5l2 2.5m3.5-4H18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x4cnoh_je {
  d: path("M3 7h18v3.5a1.5 1.5 0 0 0 0 3V17H3v-3.5a1.5 1.5 0 0 0 0-3Z");
}
</style><g class="hntgybcog"><path class="x4cnoh_je"/><path class="h657nfb1t"/></g>`,
		"fallback": "uix:e-ticket",
	});
}

export default Component;
