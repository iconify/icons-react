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
		"content": `<style>.d5aekwbeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6.5L7.5 4v16m4.5-8a4 8 0 1 0 8 0a4 8 0 1 0-8 0");
}
</style><path class="d5aekwbeo"/>`,
		"fallback": "uix:binary-code",
	});
}

export default Component;
