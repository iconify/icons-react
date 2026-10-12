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

.j1c1ipxpi {
  d: path("M6.5 16.75V7h2.25a2.5 2.5 0 0 1 0 5H6.5m2.25 0L11 16.75M13.75 19v-8.75m0 0h1.75a2.75 2.75 0 0 1 0 5.5h-1.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="j1c1ipxpi"/></g>`,
		"fallback": "iconoven:currency-rupiah-sharp",
	});
}

export default Component;
