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
		"content": `<style>.e-6k2zpbv {
  d: path("M3 6.5L4.5 3h15L21 6.5m-18 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0a2.25 2.25 0 0 0 4.5 0m-11.5 12v-4.75a2.5 2.5 0 0 1 5 0v4.75Zm2.5 0v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pby155bhk {
  d: path("M9.5 15.5c1 1 2-1 3 0c.75.75 1.5.25 2-.25");
}
</style><g class="hntgybcog"><path class="e-6k2zpbv"/><path class="pby155bhk"/></g>`,
		"fallback": "uix:ice-cream-shop",
	});
}

export default Component;
