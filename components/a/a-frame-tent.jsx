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
		"content": `<style>.jx-40ie9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5L13.5 3M21 20.5L10.5 3M3 20.5h18m-12 0l3-6l3 6");
}
</style><path class="jx-40ie9h"/>`,
		"fallback": "uix:a-frame-tent",
	});
}

export default Component;
