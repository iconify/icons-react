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

.e-2-i017w {
  cx: 12px;
  cy: 12px;
  r: 2.75px;
}

.vnlw6lbam {
  d: path("M6.75 12A5.25 5.25 0 0 1 12 6.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><circle class="e-2-i017w"/><path class="vnlw6lbam"/></g>`,
		"fallback": "iconoven:disc-sharp",
	});
}

export default Component;
