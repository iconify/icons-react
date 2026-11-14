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
		"content": `<style>.yaj0sobsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.782 5.282h4.072a.621.621 0 0 1 .439 1.061a1.5 1.5 0 0 0 0 2.121l4.243 4.243a1.5 1.5 0 0 0 2.121 0a.621.621 0 0 1 1.061.439v4.072a1.5 1.5 0 0 1-1.5 1.5h-4.072a.621.621 0 0 1-.439-1.061a1.5 1.5 0 0 0 0-2.121l-4.243-4.243a1.5 1.5 0 0 0-2.121 0a.621.621 0 0 1-1.061-.439V6.782a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="yaj0sobsi"/>`,
		"fallback": "uix:cursor-resize-diagonal",
	});
}

export default Component;
