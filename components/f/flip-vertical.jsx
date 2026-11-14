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
		"content": `<style>.ofxr8_-4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9H7.25A1.75 1.75 0 0 1 5.5 7.25V5.735a1.75 1.75 0 0 1 2.483-1.589l4.615 2.13A1.428 1.428 0 0 1 12 9m0 6H7.25a1.75 1.75 0 0 0-1.75 1.75v1.515a1.75 1.75 0 0 0 2.483 1.589l4.615-2.13A1.428 1.428 0 0 0 12 15m9-3H3");
}
</style><path class="ofxr8_-4t"/>`,
		"fallback": "uix:flip-vertical",
	});
}

export default Component;
