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
		"content": `<style>.ui5g7rb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.531 14.824C16.059 11.94 17.51 10.451 18 8c.5-2.5 0-5-2-5s-3 1-5.5 1S7 3 5 3S2.5 5.5 3 8s2 4 2.5 7l1 4.5c.25 1 1.5 1 1.75 0l1.25-5c.25-1 1.75-1 2 0l.563 2.253M14.75 18l2 2L21 15.75");
}
</style><path class="ui5g7rb9x"/>`,
		"fallback": "uix-sharp:bite-check",
	});
}

export default Component;
