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
		"content": `<style>.ubmhnwvsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.67 17.444C8.187 16.682 2.986 11.305 2.5 4.75c0-1.25 1-2.25 2.25-2.25H7l1.5 4l-1.75 1.25c1 2.5 3 4.5 5.5 5.5l1.25-1.75l4 1.5v.166m0 2.834v5.5M21 16v5.5");
}
</style><path class="ubmhnwvsl"/>`,
		"fallback": "uix:call-park",
	});
}

export default Component;
