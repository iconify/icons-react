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
		"content": `<style>.b405utblj {
  cx: 10.5px;
  cy: 11px;
  r: 4.5px;
}

.fkwkb8hzx {
  cx: 10.5px;
  cy: 11px;
  r: 1.5px;
}

.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.pld_2hbet {
  d: path("M10.5 15.5h6.25L18 17");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><circle class="b405utblj"/><circle class="fkwkb8hzx"/><path class="pld_2hbet"/></g>`,
		"fallback": "iconoven:fire-hose-sharp",
	});
}

export default Component;
