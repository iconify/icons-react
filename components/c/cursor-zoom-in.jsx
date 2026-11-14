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
		"content": `<style>.g6wu0l0bw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.25 4.3l2.693 1.077A.753.753 0 0 1 9 6.75l-1.053.526a1.5 1.5 0 0 0-.671.671L6.75 9a.753.753 0 0 1-1.373-.057L4.3 6.25A1.5 1.5 0 0 1 6.25 4.3M8.5 14a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m9.5 4l3 3m-7-9.5v5M11.5 14h5");
}
</style><path class="g6wu0l0bw"/>`,
		"fallback": "uix:cursor-zoom-in",
	});
}

export default Component;
