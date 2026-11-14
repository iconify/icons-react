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
		"content": `<style>.cq4jgpr1t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14a6.5 5 0 1 0 13 0a6.5 5 0 1 0-13 0Zm0 0L3 10m15.5 4l2.5-4M8 18.5L7 21m9-2.5l1 2.5M6.5 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="cq4jgpr1t"/>`,
		"fallback": "uix-sharp:crab-dish",
	});
}

export default Component;
