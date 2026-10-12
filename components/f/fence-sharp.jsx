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
		"content": `<style>.qm6z45odj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 7l1.5-3l1.5 3v14.25h-3Zm7.75 0L12 4l1.5 3v14.25h-3Zm7.75 0l1.5-3l1.5 3v14.25h-3Zm-15.5 3.25h18.5M2.75 16.5h18.5");
}
</style><path class="qm6z45odj"/>`,
		"fallback": "iconoven:fence-sharp",
	});
}

export default Component;
