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
		"content": `<style>.b6-funbhq {
  d: path("M8 11.5h8V18H8Zm4 0v3");
}

.d2uofljtc {
  d: path("M5 8.5A3.5 3.5 0 0 1 8.5 5h7A3.5 3.5 0 0 1 19 8.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5ZM9.5 5v-.5A1.5 1.5 0 0 1 11 3h2a1.5 1.5 0 0 1 1.5 1.5V5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d2uofljtc"/><path class="b6-funbhq"/></g>`,
		"fallback": "uix-sharp:delivery-box-backpack",
	});
}

export default Component;
