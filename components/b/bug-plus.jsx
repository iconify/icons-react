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
		"content": `<style>.n87d4uqtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 5.5zA4.5 4.5 0 0 1 13 10v2a4.5 4.5 0 0 1-4.5 4.5A4.5 4.5 0 0 1 4 12v-2a4.5 4.5 0 0 1 4.5-4.5M6 5.5a2.5 2.5 0 0 1 5 0m-2.5 0v11M4 8.5L2 7m2 4.5H2m2 3L2 15m11-6.5L15 7m-2 4.5h2m-2 3l2 .5m3 0v6m-3-3h6");
}
</style><path class="n87d4uqtl"/>`,
		"fallback": "uix:bug-plus",
	});
}

export default Component;
