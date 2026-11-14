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
		"content": `<style>.fs8ia7etp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 17.5h17M18 15l2.5 2.5L18 20M3.5 17.5l13-13m-3.5 0h3.5V8m-8.05 4.55a7 7 0 0 1 2.05 4.95");
}
</style><path class="fs8ia7etp"/>`,
		"fallback": "uix:cosine-similarity",
	});
}

export default Component;
