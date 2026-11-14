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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}

.x4r566b3m {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8.5 11h7v5h-7Zm3.5 5v2.5m-2 0h4");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="x4r566b3m"/></g>`,
		"fallback": "uix-sharp:file-slides",
	});
}

export default Component;
