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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hw_0nub0u {
  d: path("M5.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M9 6v5");
}

.muyy-sk_r {
  d: path("M3 17V8a2 2 0 0 1 2-2h10l4.5 5H21v6Z");
}
</style><g class="hntgybcog"><path class="muyy-sk_r"/><path class="hw_0nub0u"/></g>`,
		"fallback": "uix:airport-shuttle",
	});
}

export default Component;
