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
		"content": `<style>.qnw4nccja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h3l3 1.5l-3 1.5h-3zm0 5.25h7l3 1.5l-3 1.5h-7zm0 5.25h11l3 1.5l-3 1.5h-11zm0 5.25h15l3 1.5l-3 1.5h-15z");
}
</style><path class="qnw4nccja"/>`,
		"fallback": "uix:energy-rating",
	});
}

export default Component;
