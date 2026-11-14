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
		"content": `<style>.p0e67kbqc {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M7.75 16.75h2.5v2.5h-2.5ZM14 10.5h2.5V13H14Zm-5 6.25c0-3.25 2-5 5-5");
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
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="p0e67kbqc"/></g>`,
		"fallback": "uix-sharp:file-svg",
	});
}

export default Component;
