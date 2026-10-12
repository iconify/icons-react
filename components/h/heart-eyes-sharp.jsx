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

.j0nckjwul {
  d: path("M9 11.25L7 9.783V7.73h1.667l.333.6l.333-.6H11v2.053zm6 0l-2-1.467V7.73h1.667l.333.6l.333-.6H17v2.053zM8.75 15l1.35 1.5h3.8l1.35-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="j0nckjwul"/></g>`,
		"fallback": "iconoven:heart-eyes-sharp",
	});
}

export default Component;
