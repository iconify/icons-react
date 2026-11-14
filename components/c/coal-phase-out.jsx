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
		"content": `<style>.xs1k8db7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.541 19.459l-.041.041h-8l-3.5-7l1.521-3.041m3.61-4.335L14 4l5.5 3.5l1 7l-.999.999M3.5 3.5l17 17");
}
</style><path class="xs1k8db7m"/>`,
		"fallback": "uix-sharp:coal-phase-out",
	});
}

export default Component;
