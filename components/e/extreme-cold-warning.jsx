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
		"content": `<style>.e-y032dma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14V5.5a2 2 0 0 1 4 0V14a4 4 0 1 1-4 0m2 3.5h.01M20 4v10m0 4.25h.01");
}
</style><path class="e-y032dma"/>`,
		"fallback": "uix:extreme-cold-warning",
	});
}

export default Component;
