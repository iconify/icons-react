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
		"content": `<style>.cex9sd-5l {
  d: path("M17.5 16.25c0-.75 1.25-.75 1.25.25s-1.5 1.25-2 .25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mzqsa7b9d {
  d: path("m15.005 5.934l1.061 1.061a1.75 1.75 0 0 1 0 2.475l-4.596 4.596a1.75 1.75 0 0 1-2.475 0l-1.061-1.061a1.75 1.75 0 0 1 0-2.475l4.596-4.596a1.75 1.75 0 0 1 2.475 0M8.5 13.5L4 18M15.5 6.5L18 4m-1.5-1.5l3 3m-4.25 11.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M18 19.5v2.25");
}
</style><g class="hntgybcog"><path class="mzqsa7b9d"/><path class="cex9sd-5l"/></g>`,
		"fallback": "uix:child-vaccine",
	});
}

export default Component;
