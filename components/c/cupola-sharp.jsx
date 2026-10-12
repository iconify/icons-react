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
		"content": `<style>.p-afnc97q {
  d: path("M10.5 15.25V12.5h3v2.75ZM6.67 9.08l2.41-2.41l.42-.42h5l.42.42l2.41 2.41l.42.42H6.25zM12 6.25v-3.5");
}

.pheudvk4p {
  d: path("M4.25 18.25h15.5v3H4.25zM8 9.5h8v8.75H8z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pheudvk4p"/><path class="p-afnc97q"/></g>`,
		"fallback": "iconoven:cupola-sharp",
	});
}

export default Component;
