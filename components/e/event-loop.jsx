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
		"content": `<style>.kr71oacge {
  d: path("M20 12.5a8 8 0 1 1-8-8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xu68j4rdt {
  d: path("M9.75 2.25L12 4.5L9.75 6.75m-1.25 3h7m-7 2.75h7m-7 2.75H13");
}
</style><g class="ulnmmdpxh"><path class="kr71oacge"/><path class="xu68j4rdt"/></g>`,
		"fallback": "uix-sharp:event-loop",
	});
}

export default Component;
