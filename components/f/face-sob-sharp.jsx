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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.l8zx9lbmc {
  d: path("m9.75 8.75l-1.5-1.962l-1.5 1.962c-.65.85-.5 2.75-.5 4.25m8-4.25l1.5-1.962l1.5 1.962c.65.85.5 2.75.5 4.25m-7 1.25h2.5v2.25h-2.5v-1.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="l8zx9lbmc"/></g>`,
		"fallback": "iconoven:face-sob-sharp",
	});
}

export default Component;
