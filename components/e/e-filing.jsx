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
		"content": `<style>.ec0cm6tjs {
  d: path("M4 4.75h16v11H4Zm-1.5 14.5h19M7 8.75h4M7 13h4.5");
}

.hp7vvkb0t {
  d: path("M13.5 9.5L15 11l2.25-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ec0cm6tjs"/><path class="hp7vvkb0t"/></g>`,
		"fallback": "uix-sharp:e-filing",
	});
}

export default Component;
