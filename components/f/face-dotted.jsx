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
		"content": `<style>.x4p9_7vmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.65 2.644a9.5 9.5 0 0 1 5.627 3.25m1.65 2.857a9.5 9.5 0 0 1 0 6.498m-1.65 2.857a9.5 9.5 0 0 1-5.627 3.25m-3.3 0a9.5 9.5 0 0 1-5.627-3.25m-1.65-2.857a9.5 9.5 0 0 1 0-6.498m1.65-2.857a9.5 9.5 0 0 1 5.627-3.25M9 9.5h.01m5.99 0h.01m-.686-2.485a5.5 5.5 0 0 1 2.844 3.104m0 3.762a5.5 5.5 0 0 1-2.844 3.104");
}
</style><path class="x4p9_7vmw"/>`,
		"fallback": "uix-sharp:face-dotted",
	});
}

export default Component;
