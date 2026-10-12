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
		"content": `<style>.l0klitb6q {
  d: path("M8 13.5h8v5H8z");
}

.q0rjtkgun {
  d: path("M4.75 6.25h14.5v15H4.75zm4.75 0v-1a2.5 2.5 0 0 1 5 0v1");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="q0rjtkgun"/><path class="l0klitb6q"/></g>`,
		"fallback": "iconoven:backpack-mini-sharp",
	});
}

export default Component;
