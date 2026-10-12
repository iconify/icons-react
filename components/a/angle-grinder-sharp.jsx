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
		"content": `<style>.k9io3fbfg {
  d: path("M2.75 5h15.5v5H2.75z");
}

.mzfeuel6o {
  cx: 14.5px;
  cy: 15.5px;
  r: 2.5px;
}

.p763c9bvf {
  d: path("m19.75 17.5l1.5.5m-3.5 2L19 21.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zoxif1b-p {
  d: path("M6.5 5L4.75 2.75M10 14.5a4.5 4.5 0 0 1 9 0");
}
</style><g class="x2cwu0gfd"><path class="k9io3fbfg"/><path class="zoxif1b-p"/><circle class="mzfeuel6o"/><path class="p763c9bvf"/></g>`,
		"fallback": "iconoven:angle-grinder-sharp",
	});
}

export default Component;
