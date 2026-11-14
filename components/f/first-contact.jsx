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
		"content": `<style>.dgcw4wxkq {
  d: path("M3 11a9 3 0 1 0 18 0a9 3 0 1 0-18 0Z");
}

.omo0fdcrs {
  d: path("M7.5 8.5a4.5 4.5 0 0 1 9 0M4 20h16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dgcw4wxkq"/><path class="omo0fdcrs"/></g>`,
		"fallback": "uix-sharp:first-contact",
	});
}

export default Component;
