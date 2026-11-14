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
		"content": `<style>.e9wx5ob7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 19l4-6l3.5 2.5l2-4.5m1.5-1L15 8.75m1.5-1L18 6.5m1.5-1l1.5-1");
}
</style><path class="e9wx5ob7z"/>`,
		"fallback": "uix:chart-line-dashed",
	});
}

export default Component;
