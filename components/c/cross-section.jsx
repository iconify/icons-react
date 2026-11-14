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
		"content": `<style>.o_en_ccvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.513 9.987l4.25-4.25a1.75 1.75 0 0 1 2.474 0l4.25 4.25A1.75 1.75 0 0 1 18 11.225v8.525a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 19.75v-8.525a1.75 1.75 0 0 1 .513-1.238M8 14.5h3m2 0h3M4 12.75L2.5 14.5L4 16.25m16-3.5l1.5 1.75l-1.5 1.75");
}
</style><path class="o_en_ccvm"/>`,
		"fallback": "uix:cross-section",
	});
}

export default Component;
