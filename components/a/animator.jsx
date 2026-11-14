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
		"content": `<style>.hw_s1dbqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3h6l1.5 4l-4.5 5.5L7.5 7Zm3 4.5v5m-9 6q4.5-5.25 9 0t9 0");
}
</style><path class="hw_s1dbqb"/>`,
		"fallback": "uix:animator",
	});
}

export default Component;
