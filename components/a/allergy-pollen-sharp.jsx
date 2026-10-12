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
		"content": `<style>.casxsoblm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.5 4h.01M20 12h.01");
}

.cccdy6fet {
  cx: 9.5px;
  cy: 14.25px;
  r: 6.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vvdvwgbwd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 11.25L8 12.5l-1.75 1.25m6.5-2.5L11 12.5l1.75 1.25m-3.25 2a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 1 1 0-2.5Zm9.63-10.71a1.1 1.1 0 1 1 .55 1.67a1.1 1.1 0 1 1-1.43 1.04a1.1 1.1 0 1 1-1.43-1.04a1.1 1.1 0 1 1 .55-1.67a1.1 1.1 0 1 1 1.76 0Z");
}
</style><g class="ux2u0rbkq"><circle class="cccdy6fet"/><path class="vvdvwgbwd"/><path class="casxsoblm"/></g>`,
		"fallback": "iconoven:allergy-pollen-sharp",
	});
}

export default Component;
