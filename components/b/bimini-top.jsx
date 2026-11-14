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
		"content": `<style>.w-la-9b7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19c-1 3.5-3 5.5-6.5 5.5H4.5Zm2-7q7.5-3.5 15 0M7 6v8m10-8v8");
}
</style><path class="w-la-9b7k"/>`,
		"fallback": "uix-sharp:bimini-top",
	});
}

export default Component;
