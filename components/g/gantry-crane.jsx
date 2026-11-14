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
		"content": `<style>.yyy2dxb4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M5 3.5v18m14-18v18m-7-18v5m-4.25 0h8.5v7h-8.5Z");
}
</style><path class="yyy2dxb4n"/>`,
		"fallback": "uix-sharp:gantry-crane",
	});
}

export default Component;
