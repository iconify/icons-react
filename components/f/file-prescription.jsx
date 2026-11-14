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
		"content": `<style>.f73hq7bfk {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-11 11V11h2.75c1.25 0 2.25 1 2.25 2.25c0 1-1 2-2.25 2H8.5m2.75 0l4.25 4.5m0-4l-3.25 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="f73hq7bfk"/></g>`,
		"fallback": "uix-sharp:file-prescription",
	});
}

export default Component;
