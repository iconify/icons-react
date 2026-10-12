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

.lisq5kbfb {
  d: path("M15.32 8.94a4 4 0 0 0-6.28 1.56a4 4 0 0 0 0 3a4 4 0 0 0 6.28 1.56M7.5 10.5H11m-3.5 3H11");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="lisq5kbfb"/></g>`,
		"fallback": "iconoven:banknote-euro-sharp",
	});
}

export default Component;
