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
		"content": `<style>.s1wvdgiug {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4za3 3 0 0 1 3 3v10a3 3 0 0 1-3 3a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m3 3.5h8.5a2 2 0 0 1 0 4H10m-3 3V17");
}
</style><path class="s1wvdgiug"/>`,
		"fallback": "uix:door-handle",
	});
}

export default Component;
