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
		"content": `<style>.boinzdbno {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.5h2v5Q7 8.5 7 11v10.5H2.5V11q0-2.5 1.25-3.5Zm7.75 7h2V12h1.75v9.5h-5.5V12h1.75ZM19 7h1.5v3q1 1.5 1 3v8.5H18V13q0-1.5 1-3Z");
}
</style><path class="boinzdbno"/>`,
		"fallback": "uix-sharp:alcohol-aisle",
	});
}

export default Component;
