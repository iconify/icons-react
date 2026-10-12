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
		"content": `<style>.p8ph0qbzm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 4.75h12v14.5h-12zm0 3.5h12m-12 7.5h12m-15-7.25L2.75 12l3.5 3.5");
}
</style><path class="p8ph0qbzm"/>`,
		"fallback": "iconoven:frame-back-sharp",
	});
}

export default Component;
