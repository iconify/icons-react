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
		"content": `<style>.c0ovh-mnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 12a2.75 2.75 0 0 1 5.5 0a4.125 4.125 0 0 1-8.25 0a5.5 5.5 0 0 1 11 0a6.875 6.875 0 0 1-13.75 0a8.25 8.25 0 0 1 16.5 0");
}
</style><path class="c0ovh-mnt"/>`,
		"fallback": "uix:developing-reel",
	});
}

export default Component;
