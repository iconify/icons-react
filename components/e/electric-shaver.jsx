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
		"content": `<style>.trwmczbfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 3h9.5A3.25 3.25 0 0 1 20 6.25a3.25 3.25 0 0 1-3.25 3.25h-9.5A3.25 3.25 0 0 1 4 6.25A3.25 3.25 0 0 1 7.25 3M7 9.5L8.5 19a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5L17 9.5M10 3v6.5M14 3v6.5m-2 5h.01");
}
</style><path class="trwmczbfa"/>`,
		"fallback": "uix:electric-shaver",
	});
}

export default Component;
