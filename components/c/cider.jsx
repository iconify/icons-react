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
		"content": `<style>.nt74v1bfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 13.489V12.5q0-3-4-4.5V5h-3v3q-4 1.5-4 4.5V20q0 1.5 1.5 1.5h7.432M7 2.5h4V5H7Zm11 13.75c-1.25-1-3.5-.5-3.5 2.25c0 2.25 1.75 3.5 3.5 2.75c1.75.75 3.5-.5 3.5-2.75c0-2.75-2.25-3.25-3.5-2.25Zm0 0l.75-2");
}
</style><path class="nt74v1bfv"/>`,
		"fallback": "uix-sharp:cider",
	});
}

export default Component;
