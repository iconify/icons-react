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
		"content": `<style>.gcdqqob9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4h5v3.25h-5zm1.5 3.25h3l.59 1.65l1.07 2.95l.59 1.65h8.25v4.25H7.5l-.55-1.66l-2.4-7.18L4 7.25zm1.4 2.25l2 5.5m-5.4 6.25h16.5M10 17.75v3.5m6.5-3.5v3.5");
}
</style><path class="gcdqqob9t"/>`,
		"fallback": "iconoven:car-seat-sharp",
	});
}

export default Component;
