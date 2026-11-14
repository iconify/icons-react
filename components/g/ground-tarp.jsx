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
		"content": `<style>.w8r7f1ggr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5h10l3 9H4ZM5.25 5.25h.01m13.49 0h.01M2.5 19h.01m18.99 0h.01");
}
</style><path class="w8r7f1ggr"/>`,
		"fallback": "uix-sharp:ground-tarp",
	});
}

export default Component;
