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
		"content": `<style>.wzglxusue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 12l-2-6.25a2.25 2.25 0 1 1 4 0Zm0 0l2 5.25a2.25 2.25 0 1 1-4 0Zm0 0h6.25A2.25 2.25 0 1 1 17 16Zm0 0l-5 4a2.25 2.25 0 1 1-1.25-4Z");
}
</style><path class="wzglxusue"/>`,
		"fallback": "uix:hybrid-orbital",
	});
}

export default Component;
