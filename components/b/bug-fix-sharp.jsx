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
		"content": `<style>.lebnabcdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 8a3.5 5 0 1 1 0 10a3.5 5 0 1 1 0-10Zm0 3v4m-3.03-4.5L4.72 9.25M6.5 13H4m2.97 2.5l-2.25 1.25m8.31-6.25l2.25-1.25M13.5 13H16m-2.97 2.5l2.25 1.25m.97 3l1.5 1.5l3-3.25");
}
</style><path class="lebnabcdy"/>`,
		"fallback": "iconoven:bug-fix-sharp",
	});
}

export default Component;
