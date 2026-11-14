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
		"content": `<style>.r_rndyb3y {
  d: path("M3 16h18l-2.5 4h-13Zm3-8l6-4l6 4v8H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdz2kgb9i {
  d: path("M10.5 11h3v5h-3Z");
}
</style><g class="ulnmmdpxh"><path class="r_rndyb3y"/><path class="zdz2kgb9i"/></g>`,
		"fallback": "uix-sharp:houseboat",
	});
}

export default Component;
