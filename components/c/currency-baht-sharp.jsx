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

.o-acy4g1i {
  d: path("M8.75 7h4a2.25 2.25 0 0 1 0 4.5h-4m0 0h4.5a2.5 2.5 0 0 1 0 5h-4.5V7m3-2v14");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="o-acy4g1i"/></g>`,
		"fallback": "iconoven:currency-baht-sharp",
	});
}

export default Component;
