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
		"content": `<style>.h7cms5v3o {
  d: path("m5 14.5l1.75 1.75L9.5 12.5m5.25 0l3.5 3.5m0-3.5l-3.5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i3_t5-8og {
  d: path("M6.875 4h10.25A4.375 4.375 0 0 1 21.5 8.375v7.25A4.375 4.375 0 0 1 17.125 20H6.875A4.375 4.375 0 0 1 2.5 15.625v-7.25A4.375 4.375 0 0 1 6.875 4M2.5 8.5h19m-9.5 0V20");
}
</style><g class="hntgybcog"><path class="i3_t5-8og"/><path class="h7cms5v3o"/></g>`,
		"fallback": "uix:browser-compatibility",
	});
}

export default Component;
