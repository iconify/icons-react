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
		"content": `<style>.b53z4dbgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M10 8v6h5l3 6.5m-4.568-3.219a4.5 4.5 0 1 1-5.971-5.01M10 10.5h4");
}
</style><path class="b53z4dbgf"/>`,
		"fallback": "uix:health-disability-cover",
	});
}

export default Component;
