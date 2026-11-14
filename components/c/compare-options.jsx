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
		"content": `<style>.j7ydteo0d {
  d: path("M2.5 3h8v18h-8Zm11 0h8v18h-8Z");
}

.pqlbb9zeg {
  d: path("m16 12.5l1.5 1.5l1.5-2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j7ydteo0d"/><path class="pqlbb9zeg"/></g>`,
		"fallback": "uix-sharp:compare-options",
	});
}

export default Component;
