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
		"content": `<style>.qjjdoubrg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7q4-.5 7.5-4.5q3.5 4 7.5 4.5Zm-1 8.5q3-.5 3.75-2.25h9.5Q17.5 15 20.5 15.5m-18 5Q5.75 20 6.75 18h10.5q1 2 4.25 2.5M7.25 7v11m9.5-11v11M10 10.5c0-2 .75-3.5 2-3.5s2 1.5 2 3.5Z");
}
</style><path class="qjjdoubrg"/>`,
		"fallback": "uix:bell-tower-pagoda",
	});
}

export default Component;
