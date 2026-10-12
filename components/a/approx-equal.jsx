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
		"content": `<style>.uqyg6ebur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 9.75c1.75-2 3.75-2.5 7.25-1s5.5 1 7.25-1m-14.5 8.5c1.75-2 3.75-2.5 7.25-1s5.5 1 7.25-1");
}
</style><path class="uqyg6ebur"/>`,
		"fallback": "iconoven:approx-equal",
	});
}

export default Component;
