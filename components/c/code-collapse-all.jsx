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
		"content": `<style>.jajvgv8ww {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5L12 3l5 3.5M7 10l5-3.5l5 3.5m-8.5 3.5l-4 3.75l4 3.75m7-7.5l4 3.75l-4 3.75");
}
</style><path class="jajvgv8ww"/>`,
		"fallback": "uix:code-collapse-all",
	});
}

export default Component;
