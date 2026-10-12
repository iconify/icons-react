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
		"content": `<style>.lj2v537xr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 4.5v16.75m17.75-3v3M3.25 12.5H21v5.75H3.25Zm3-5.5H11v2.5H6.25z");
}
</style><path class="lj2v537xr"/>`,
		"fallback": "iconoven:hotel-heart-sharp",
	});
}

export default Component;
