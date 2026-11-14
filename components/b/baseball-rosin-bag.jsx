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
		"content": `<style>.ftem1ccvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 10C3 12 2.75 21.5 12 21.5S21 12 15.5 10m-6 0L7 3.5c2.5 1.25 7.5 1.25 10 0L14.5 10m-7 0h9");
}
</style><path class="ftem1ccvk"/>`,
		"fallback": "uix:baseball-rosin-bag",
	});
}

export default Component;
