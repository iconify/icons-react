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
		"content": `<style>.ipx4oj79c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m-2 12c0-3.5 2.5-5.5 5.5-5.5c1.773 0 3.371.698 4.382 1.992M16.5 10h5m-6.75 8l2 2L21 15.75");
}
</style><path class="ipx4oj79c"/>`,
		"fallback": "uix:byline-check",
	});
}

export default Component;
