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
		"content": `<style>.pet6aoy4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M3 21.5V19a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v2.5M16.5 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 2.5V16");
}
</style><path class="pet6aoy4k"/>`,
		"fallback": "uix:field-reporter",
	});
}

export default Component;
