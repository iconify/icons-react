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
		"content": `<style>.l20iewiou {
  d: path("M6.5 4h11A4.5 4.5 0 0 1 22 8.5v7a4.5 4.5 0 0 1-4.5 4.5h-3a2.5 2.5 0 0 0-5 0h-3A4.5 4.5 0 0 1 2 15.5v-7A4.5 4.5 0 0 1 6.5 4Z");
}

.tjw4nor3t {
  d: path("M6.5 6.75h11a1.75 1.75 0 0 1 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-1a5.25 5.25 0 0 0-9 0h-1a1.75 1.75 0 0 1-1.75-1.75v-7A1.75 1.75 0 0 1 6.5 6.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l20iewiou"/><path class="tjw4nor3t"/></g>`,
		"fallback": "uix-sharp:face-cushion",
	});
}

export default Component;
