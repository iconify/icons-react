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
		"content": `<style>.j-m8dibhb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25h18.5v13H2.75zm0 9.75h18.5M6.5 8h11m-11 2.75h7M5 17.25L8 14m1.5 3.25l3-3.25m1.5 3.25L17 14m1.5 3.25l2.75-3M6 17.25v4m12-4v4m-14 0h4m8 0h4");
}
</style><path class="j-m8dibhb"/>`,
		"fallback": "iconoven:hoarding-panel-sharp",
	});
}

export default Component;
