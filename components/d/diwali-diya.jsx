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
		"content": `<style>.qie7_4bwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12c0 4.5 4 7 9 7c4 0 7-2 9.5-7c-3.5 1-6.5.5-9.5.5c-3.5 0-6.5-.5-9-.5Zm10-2.25C11.5 8.9 11.25 7 13 4.5c1.75 2.5 1.5 4.4 0 5.25Z");
}
</style><path class="qie7_4bwz"/>`,
		"fallback": "uix-sharp:diwali-diya",
	});
}

export default Component;
