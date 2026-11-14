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
		"content": `<style>.kv1vpxb9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13V5.5a3 3 0 0 1 6 0V13a5 5 0 1 1-6 0M18.5 3v17.5M16 18l2.5 2.5L21 18M8 13.5V17");
}
</style><path class="kv1vpxb9t"/>`,
		"fallback": "uix:cold-snap",
	});
}

export default Component;
