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
		"content": `<style>.qotux5m9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12h.01m3.99 0h.01m3.99 0H20m-6.25-6.25L20 12l-6.25 6.25");
}
</style><path class="qotux5m9v"/>`,
		"fallback": "uix:arrow-right-dashed",
	});
}

export default Component;
