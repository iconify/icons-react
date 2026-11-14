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
		"content": `<style>.g2_901bzr {
  d: path("M6 12V4h4.5v8m3 0l2-7.5l4 1L18 12M6 7h4.5");
}

.i34pl-cjo {
  d: path("m2.5 9l1 3v7.5a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V12l1-3m-18 3h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i34pl-cjo"/><path class="g2_901bzr"/></g>`,
		"fallback": "uix-sharp:donation-box-books",
	});
}

export default Component;
