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
		"content": `<style>.hs9rqlbar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5C7 5 10 10 14 6c3-3 5-3 7.5-3.5m-19 11C7 9 10 14 14 10c3-3 5-3 7.5-3.5M7 16.5L5.5 20m6.5-4.5L10.5 19m7-6.5L16 16");
}
</style><path class="hs9rqlbar"/>`,
		"fallback": "uix:atmospheric-river",
	});
}

export default Component;
