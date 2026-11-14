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
		"content": `<style>.sjwndbcrf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 19a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.25 0h2.25m2.5 0Q17 19 17 16.25m0-2.5V11.5m0 0C15.5 10 14 8.25 14 6a3 3 0 0 1 6 0c0 2.25-1.5 4-3 5.5M17 6h.01");
}
</style><path class="sjwndbcrf"/>`,
		"fallback": "uix:dog-walk-route",
	});
}

export default Component;
