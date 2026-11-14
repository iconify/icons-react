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
		"content": `<style>.nccvlc13v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 15.5c-3 0-3.5-4.5-1-6c-.5-4 3-7 6-6.5c3-.5 6.5 2.5 6 6.5c2.5 1.5 2 6-1 6Zm5 0v6m-8.5 0c0-2 1.5-3.25 3.5-3.25c0 2-1.5 3.25-3.5 3.25m17 0c0-2-1.5-3.25-3.5-3.25c0 2 1.5 3.25 3.5 3.25");
}
</style><path class="nccvlc13v"/>`,
		"fallback": "uix:autumn-tree",
	});
}

export default Component;
