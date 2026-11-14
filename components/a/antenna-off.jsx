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
		"content": `<style>.y39g1_ggj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3v3.1m0 7.8v2.6M10 3h.01M9 16.5h2a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 19A2.5 2.5 0 0 1 9 16.5m-5.5-13l17 17");
}
</style><path class="y39g1_ggj"/>`,
		"fallback": "uix:antenna-off",
	});
}

export default Component;
