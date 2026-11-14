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
		"content": `<style>.b-vugplue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3 21c0-4.5 3.5-6.5 7.5-6.5c.682 0 1.349.058 1.987.177M18 21.25l-2.5-2.75a1.75 1.75 0 1 1 2.5-2.25a1.75 1.75 0 1 1 2.5 2.25Z");
}
</style><path class="b-vugplue"/>`,
		"fallback": "uix:customer-health",
	});
}

export default Component;
