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
		"content": `<style>.bd7ujbb7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 17a8.5 8.5 0 1 1 15.5-4.75h-6.25a2 2 0 0 0-2 2v6.25a8.5 8.5 0 0 1-4.75-1l-3.5 1Zm13-2v6m-3-3h6");
}
</style><path class="bd7ujbb7m"/>`,
		"fallback": "uix:comment-new",
	});
}

export default Component;
