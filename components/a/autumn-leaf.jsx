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
		"content": `<style>.f3wydlz5w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l1.75 3.75l2.5-1l-.5 3.75l3.5-.75L18 12l1.25 1.25l-4 3l.5 1.75l-3.75-.75l-3.75.75l.5-1.75l-4-3L6 12L4.75 8.75l3.5.75l-.5-3.75l2.5 1Zm0 7v11.5");
}
</style><path class="f3wydlz5w"/>`,
		"fallback": "uix-sharp:autumn-leaf",
	});
}

export default Component;
