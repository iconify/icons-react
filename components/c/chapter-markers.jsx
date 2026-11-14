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
		"content": `<style>.iyczmux_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5h7A3.5 3.5 0 0 1 17 6v12a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 3 18V6a3.5 3.5 0 0 1 3.5-3.5M17 5h3a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-3m0 3.5h3a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-3M6.5 7h7");
}
</style><path class="iyczmux_w"/>`,
		"fallback": "uix:chapter-markers",
	});
}

export default Component;
