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
		"content": `<style>.c6vt1lbds {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.e30mlr4ih {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 12a6.5 6.5 0 1 1-13 0a6.5 6.5 0 1 1 13 0");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z_wb0h3rz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 10h.01M14 10h.01M10 14h.01M14 14h.01");
}
</style><g class="y9tr6bcfx"><circle class="c6vt1lbds"/><path class="e30mlr4ih"/><path class="z_wb0h3rz"/></g>`,
		"fallback": "iconoven:button-sew",
	});
}

export default Component;
