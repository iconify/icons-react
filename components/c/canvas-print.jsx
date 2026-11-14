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
		"content": `<style>.fixp1ccig {
  d: path("m6.5 14.5l3-4L12 13l1.5-1.5");
}

.losnzccmu {
  d: path("M3.5 2.5h13v16h-13Zm13 0L20 4.75v16l-3.5-2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="losnzccmu"/><path class="fixp1ccig"/></g>`,
		"fallback": "uix-sharp:canvas-print",
	});
}

export default Component;
