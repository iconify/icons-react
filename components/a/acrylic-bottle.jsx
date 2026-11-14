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
		"content": `<style>.rtvkk2bjm {
  d: path("M8 2.5h8V6H8ZM9.5 6v1.5C9.5 9 6 9.5 6 12v7.5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V12c0-2.5-3.5-3-3.5-4.5V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wr67byrvh {
  d: path("M6 14.5q3-1.5 6 0t6 0");
}
</style><g class="ulnmmdpxh"><path class="rtvkk2bjm"/><path class="wr67byrvh"/></g>`,
		"fallback": "uix-sharp:acrylic-bottle",
	});
}

export default Component;
