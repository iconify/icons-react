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
		"content": `<style>.d2l5lbczz {
  d: path("M2.5 17h19M4 17l2-4l2.5-1.5l1.5-3L13 7l2.5 2l2 2l1 2.5L20 17");
}

.pli5nub9h {
  d: path("m8.5 11.5l4 1l3-3.5m-3 3.5L12 17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d2l5lbczz"/><path class="pli5nub9h"/></g>`,
		"fallback": "uix-sharp:coal-pile",
	});
}

export default Component;
