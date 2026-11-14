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
		"content": `<style>.x9n8l1gwb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 10V8.5a2.5 2.5 0 0 1 .5-4a3.5 3.5 0 0 1 6 0a2.5 2.5 0 0 1 .5 4V10ZM12 7v3m-3.5 0v1.5a3.5 3.5 0 0 0 7 0V10m-11 11.5c0-2.25 3.25-3.75 7.5-3.75s7.5 1.5 7.5 3.75");
}
</style><path class="x9n8l1gwb"/>`,
		"fallback": "uix:chef",
	});
}

export default Component;
