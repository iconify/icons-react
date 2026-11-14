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
		"content": `<style>.vcnbw8bdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11.75v7q0 2 2 2h12.75a1.75 1.75 0 0 0 .25-3.5l-6.25-1.75q-2-.75-2-2.75v-1M6.5 2.5q1.25 1.5 0 3t0 3.25M5.25 7.5L6.5 8.75L7.75 7.5m4.25-5q1.25 1.5 0 3t0 3.25M10.75 7.5L12 8.75l1.25-1.25m4.25-5q1.25 1.5 0 3t0 3.25M16.25 7.5l1.25 1.25l1.25-1.25");
}
</style><path class="vcnbw8bdc"/>`,
		"fallback": "uix-sharp:air-to-feet",
	});
}

export default Component;
