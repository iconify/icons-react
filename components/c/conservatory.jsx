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
		"content": `<style>.vgc7-ac4z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5V12L12 4l8.5 8v8.5ZM12 4v16.5M3.5 12h17M7.75 8v12.5M16.25 8v12.5");
}
</style><path class="vgc7-ac4z"/>`,
		"fallback": "uix:conservatory",
	});
}

export default Component;
