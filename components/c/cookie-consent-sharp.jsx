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
		"content": `<style>.atnwavvpg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16 17.5l1 1l1.9-2");
}

.ccxihmb4f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 8h.01m4.74-1.25h.01m-5.26 6h.01m3.99-1.5h.01");
}

.jhfl8tb7m {
  cx: 17.5px;
  cy: 17.5px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zy680cbho {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.54 18.18a7.75 7.75 0 1 1 6.64-6.64a6 6 0 0 0-6.64 6.64Z");
}
</style><g class="ux2u0rbkq"><path class="zy680cbho"/><path class="ccxihmb4f"/><circle class="jhfl8tb7m"/><path class="atnwavvpg"/></g>`,
		"fallback": "iconoven:cookie-consent-sharp",
	});
}

export default Component;
