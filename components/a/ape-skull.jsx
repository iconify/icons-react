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
		"content": `<style>.fy4brf8sm {
  d: path("M8 10.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.jgiaaebje {
  d: path("M3.5 9.5C6 5 9.5 3 14 3s7 3.5 7 7.5q0 4.5-4.5 6l-1.5 4H8.5L3 17l2.5-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jgiaaebje"/><path class="fy4brf8sm"/></g>`,
		"fallback": "uix-sharp:ape-skull",
	});
}

export default Component;
