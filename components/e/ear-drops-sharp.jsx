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
		"content": `<style>.bwobr-bjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.25 2.75h6v7h-6zm1.6 7h3.4l-.27.54l-.96 1.92l-.27.54h-1l-.27-.54l-.96-1.92l-.27-.54zm1.4 4.5l1.5 2v.6a1.5 1.5 0 0 1-3 0v-.6zm-14.5 0a5 5 0 0 1 10 0c0 2-1.5 2.75-2.5 4s-1 3-3 3l-1.834-.041L5.75 19.5m1-5.25v-2h4v2");
}
</style><path class="bwobr-bjw"/>`,
		"fallback": "iconoven:ear-drops-sharp",
	});
}

export default Component;
