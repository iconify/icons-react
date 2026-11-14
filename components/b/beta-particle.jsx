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
		"content": `<style>.rx5n3v6tx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M3 9.5h6.25M5 14.5h4.25");
}
</style><path class="rx5n3v6tx"/>`,
		"fallback": "uix:beta-particle",
	});
}

export default Component;
