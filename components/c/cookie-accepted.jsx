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
		"content": `<style>.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.n0oj5qydu {
  d: path("M12.25 21.5a9.5 9.5 0 1 1 3-18.5A4.5 4.5 0 0 0 21 8.75a9.5 9.5 0 0 1 .5 3.5h-7.25a2 2 0 0 0-2 2ZM8 9h.01m-.51 6h.01M12 10.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n0oj5qydu"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:cookie-accepted",
	});
}

export default Component;
