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
		"content": `<style>.s25i_uk_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.25H5l2.5 5.5l3.5-13h7.75m-6.25 3l4 4m0-4l-4 4m2.75 6h6m-6 3.5h6");
}
</style><path class="s25i_uk_n"/>`,
		"fallback": "iconoven:equation-sharp",
	});
}

export default Component;
