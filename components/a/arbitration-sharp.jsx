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
		"content": `<style>.se3ub9wrt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.07 15.87l-.2.2l-.71.71l-.71-.71l-3.52-3.52l-.71-.71l.71-.71l.2-.2l.71-.71l.71.71l3.52 3.52l.71.71zM11.3 12.7l5.2-5.2M7 18.75h10v2.5H7zM2.75 13.5h3.5M4 11.25l2.25 2.25L4 15.75m17.25-2.25h-3.5M20 11.25l-2.25 2.25L20 15.75");
}
</style><path class="se3ub9wrt"/>`,
		"fallback": "iconoven:arbitration-sharp",
	});
}

export default Component;
