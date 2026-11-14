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
		"content": `<style>.nbr262bcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4q9.5-1.5 19 0v10.5q-9.5-1.5-19 0ZM5 21a3 3 0 0 1 6 0m2 0a3 3 0 0 1 6 0");
}
</style><path class="nbr262bcp"/>`,
		"fallback": "uix:cinema-screen",
	});
}

export default Component;
