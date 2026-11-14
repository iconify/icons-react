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
		"content": `<style>.fg2jrmbnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9C6 4.5 12.5 4.5 15.5 10l4-3.5c2 2.5 2 8.5 0 11l-4-3.5c-3 5.5-9.5 5.5-12.75 1l3.5-3Zm5.75.5h.01");
}
</style><path class="fg2jrmbnv"/>`,
		"fallback": "uix-sharp:grouper",
	});
}

export default Component;
