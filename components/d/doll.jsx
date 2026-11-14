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
		"content": `<style>.ahn414b-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 5.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m2.154 6h2.192a1.75 1.75 0 0 1 1.609 1.061l2.25 5.25a1.75 1.75 0 0 1-1.609 2.439H8.654a1.75 1.75 0 0 1-1.609-2.439l2.25-5.25a1.75 1.75 0 0 1 1.609-1.061M9 13.5l-4-3m10 3l4-3");
}
</style><path class="ahn414b-d"/>`,
		"fallback": "uix:doll",
	});
}

export default Component;
