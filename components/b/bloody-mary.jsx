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
		"content": `<style>.p4d5mvwam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 6.5l1.5 15h11l1.5-15M10 17l4.5-12m-2-2l2 2l3-1.5");
}
</style><path class="p4d5mvwam"/>`,
		"fallback": "uix-sharp:bloody-mary",
	});
}

export default Component;
