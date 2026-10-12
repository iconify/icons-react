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
		"content": `<style>.oy6-2bs7u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 4.5h11.5m1.75 1.75v11.5m-1.75 1.75H6.25M4.5 17.75V6.25m-1.75-3.5h3.5v3.5h-3.5zm15 0h3.5v3.5h-3.5zm0 15h3.5v3.5h-3.5zm-15 0h3.5v3.5h-3.5z");
}
</style><path class="oy6-2bs7u"/>`,
		"fallback": "iconoven:bounding-box-sharp",
	});
}

export default Component;
