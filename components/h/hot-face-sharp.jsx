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

.qd6gbqz4k {
  d: path("m7 10.9l1.375-.917l1.375.917m4.5 0l1.375-.917L17 10.9m-7.25 2.95h4.5a2.25 2.25 0 0 1-4.5 0ZM12.6 5.8l.9 1.35v.6a.9.9 0 0 1-1.8 0v-.6z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="qd6gbqz4k"/></g>`,
		"fallback": "iconoven:hot-face-sharp",
	});
}

export default Component;
