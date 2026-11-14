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
		"content": `<style>.gw80vns5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 20.5L13.5 9c1.5-2 1-6.5-2.5-6.5S7 7 8.5 9l4.577 6.193M18 15v6m-3-3h6");
}
</style><path class="gw80vns5k"/>`,
		"fallback": "uix-sharp:awareness-ribbon-double",
	});
}

export default Component;
