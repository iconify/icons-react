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
		"content": `<style>.z-h2y9r1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-6.5-2L9 13m6 0l6.5-2.5m-12-6h5m-2.5 0v5m-8.25 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m13 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="z-h2y9r1f"/>`,
		"fallback": "uix:airplane-front-view",
	});
}

export default Component;
