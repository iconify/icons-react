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
		"content": `<style>.khrtbjw3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4h4a2 2 0 0 1 2 2v10l-3-3h-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m15 4h-4a2 2 0 0 0-2 2v10l3-3h3a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2");
}
</style><path class="khrtbjw3l"/>`,
		"fallback": "uix:cross-examination",
	});
}

export default Component;
