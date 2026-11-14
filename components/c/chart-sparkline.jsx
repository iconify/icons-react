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
		"content": `<style>.arza3nbxe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 15l4-5l3.5 4.5L13.5 8l2.5 5m1.75-3.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="arza3nbxe"/>`,
		"fallback": "uix-sharp:chart-sparkline",
	});
}

export default Component;
