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
		"content": `<style>.x0_fxdbuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17.5v3h18v-3M3.5 4.5h7M8.5 9h7m-2 4.5h7");
}
</style><path class="x0_fxdbuy"/>`,
		"fallback": "uix-sharp:gantt-summary",
	});
}

export default Component;
