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
		"content": `<style>.tdcfeacaz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.25 4.25L18 7m1.25 2.25v5.5M18 17l-4.75 2.75m-2.5 0L6 17m-1.25-2.25v-5.5M6 7l4.75-2.75m2.5 7L18 8.5m-7.25 2.75L6 8.5m6 5V19M10.5 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m7.25 4.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0 8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M10.5 20.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-7.25-4.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m0-8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="tdcfeacaz"/>`,
		"fallback": "uix:crystal-lattice",
	});
}

export default Component;
