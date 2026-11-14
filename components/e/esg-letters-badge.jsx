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

.seoptyj0w {
  d: path("M8.75 15.75L7.5 21.5l2.25-1.25L12 21.5l2.25-1.25l2.25 1.25l-1.25-5.75M9 12c0-3 2-5 6-5c0 3-2 5-6 5");
}

.trxlteb6d {
  d: path("M5 9.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0");
}
</style><g class="hntgybcog"><path class="trxlteb6d"/><path class="seoptyj0w"/></g>`,
		"fallback": "uix:esg-letters-badge",
	});
}

export default Component;
