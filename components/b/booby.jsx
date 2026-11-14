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
		"content": `<style>.l69ybmbka {
  d: path("M16.75 16v3l-2 2h4l-2-2M10 6.5h.01");
}

.prmj8_b_n {
  d: path("m3 7l4-1c.5-3.5 4.5-3.5 5 .5c-.25 2.5-1 3.5 0 4.5c3-.5 7 1 9 4c-4 1.5-8 2-11 .5C8 14 8 11 8 9L7 8Zm7 8.5V19l-2 2h4l-2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="prmj8_b_n"/><path class="l69ybmbka"/></g>`,
		"fallback": "uix-sharp:booby",
	});
}

export default Component;
