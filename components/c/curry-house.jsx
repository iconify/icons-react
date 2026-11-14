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
		"content": `<style>.g6kyy0bcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18c0 5.25-4 9-9 9s-9-3.75-9-9Zm3.5 0c0-4.25 7-4.25 7 0M17 3.5c-1 1.5 1 3 0 4.75");
}
</style><path class="g6kyy0bcj"/>`,
		"fallback": "uix-sharp:curry-house",
	});
}

export default Component;
