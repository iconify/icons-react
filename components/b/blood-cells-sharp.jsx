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
		"content": `<style>.lf2baemcn {
  cx: 8.25px;
  cy: 8.25px;
  r: 5.5px;
}

.oezf-fi1u {
  d: path("M16 17.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.t0uxwyknr {
  cx: 18.75px;
  cy: 5.5px;
  r: 2.25px;
}

.w-tlhd72z {
  d: path("M6.25 8.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygphxfbhc {
  cx: 17.25px;
  cy: 17.25px;
  r: 4px;
}
</style><g class="x2cwu0gfd"><circle class="lf2baemcn"/><path class="w-tlhd72z"/><circle class="ygphxfbhc"/><path class="oezf-fi1u"/><circle class="t0uxwyknr"/></g>`,
		"fallback": "iconoven:blood-cells-sharp",
	});
}

export default Component;
