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
		"content": `<style>.fvxtc4bke {
  d: path("M7 6.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n6348pv6p {
  d: path("M7.625 2.5h8.75A2.625 2.625 0 0 1 19 5.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 5 10.875v-5.75A2.625 2.625 0 0 1 7.625 2.5m6.875 11v6.25a1.75 1.75 0 0 0 3.5 0V13.5");
}
</style><g class="hntgybcog"><path class="n6348pv6p"/><path class="fvxtc4bke"/></g>`,
		"fallback": "uix:butcher-shop",
	});
}

export default Component;
