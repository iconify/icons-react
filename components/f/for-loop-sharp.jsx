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
		"content": `<style>.xo7af27br {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5h8.5m-5.5 7h7m-10 7h6m4.5 0h8V5H14.5m2-2.25L14.25 5l2.25 2.25");
}
</style><path class="xo7af27br"/>`,
		"fallback": "iconoven:for-loop-sharp",
	});
}

export default Component;
