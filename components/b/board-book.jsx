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
		"content": `<style>.bfavsac6c {
  d: path("M4.5 18V6A3.5 3.5 0 0 1 8 2.5h9.5A2.5 2.5 0 0 1 20 5v14a2.5 2.5 0 0 1-2.5 2.5H8A3.5 3.5 0 0 1 4.5 18Z");
}

.iem6hdfnx {
  d: path("M4.5 18A3.5 3.5 0 0 1 8 14.5h12M8 2.5v12M9.5 18H17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bfavsac6c"/><path class="iem6hdfnx"/></g>`,
		"fallback": "uix-sharp:board-book",
	});
}

export default Component;
