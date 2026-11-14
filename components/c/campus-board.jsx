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
		"content": `<style>.qmbo2acxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h11L15.5 21h-11ZM2.5 21h19M10.75 7.5h5m-7.25 9h5m-4-4.5h.01M14 12h.01");
}
</style><path class="qmbo2acxb"/>`,
		"fallback": "uix-sharp:campus-board",
	});
}

export default Component;
