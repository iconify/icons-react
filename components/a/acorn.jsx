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
		"content": `<style>.fv7ucxb7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10c0-4 3.25-5.5 7.5-5.5S19.5 6 19.5 10ZM6 10v2.5c0 4.5 3 7.5 6 9c3-1.5 6-4.5 6-9V10m-6-5.5L13 2");
}
</style><path class="fv7ucxb7p"/>`,
		"fallback": "uix:acorn",
	});
}

export default Component;
