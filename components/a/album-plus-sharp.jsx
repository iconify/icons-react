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
		"content": `<style>.g7re9y2wz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 12.75h.01");
}

.n1ozt37om {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3.75H2.75v12h3.5A9.25 9.25 0 0 1 10 4.97Z");
}

.nglvqxg_z {
  cx: 15px;
  cy: 12.75px;
  r: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t8cbi0y5r {
  cx: 15px;
  cy: 12.75px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="n1ozt37om"/><circle class="nglvqxg_z"/><circle class="t8cbi0y5r"/><path class="g7re9y2wz"/></g>`,
		"fallback": "iconoven:album-plus-sharp",
	});
}

export default Component;
