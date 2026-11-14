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
		"content": `<style>.c0jbwjwyq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0m4 7l-2 4m10-4l2 4m-14-11h2.5m13.5 0h-2.5M6.25 4.75L8 6.5m9.75-1.75L16 6.5");
}
</style><path class="c0jbwjwyq"/>`,
		"fallback": "uix:bass-drum",
	});
}

export default Component;
