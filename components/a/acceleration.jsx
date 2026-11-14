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
		"content": `<style>.knrgthbhy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 12H20m-4-4.5l4.5 4.5l-4.5 4.5M5 8h6m-8.5 4h4M4 16h5");
}
</style><path class="knrgthbhy"/>`,
		"fallback": "uix:acceleration",
	});
}

export default Component;
