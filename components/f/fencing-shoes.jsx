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
		"content": `<style>.bwbs2db7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18V8c0-1 .75-1.5 1.75-1.5H7c1 0 1.75 2.25 4 2.75l6 1.25c3 .5 4.5 2.5 4.5 5V18Zm0-2.75h19m-9-5.5l1 2.75");
}
</style><path class="bwbs2db7o"/>`,
		"fallback": "uix-sharp:fencing-shoes",
	});
}

export default Component;
