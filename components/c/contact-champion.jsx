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
		"content": `<style>.lzw8w6qqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-3 13.5c0-4 3-6.5 7-6.5c1.065 0 2.061.162 2.945.465m2.805.035h5.5V16a2.75 2.75 0 0 1-5.5 0ZM18 18.75v2.5m-2 0h4");
}
</style><path class="lzw8w6qqr"/>`,
		"fallback": "uix:contact-champion",
	});
}

export default Component;
