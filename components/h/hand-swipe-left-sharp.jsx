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
		"content": `<style>.wvl58vr_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 16V9.25H16V14h4.25v7.25H11.5V16h1Zm2.5-1.5v2.25M18.25 5h-14m2.5-2.25L4.25 5l2.5 2.25");
}
</style><path class="wvl58vr_j"/>`,
		"fallback": "iconoven:hand-swipe-left-sharp",
	});
}

export default Component;
