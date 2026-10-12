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
		"content": `<style>.gswzab2hg {
  d: path("M9.75 5.5h10.5M9.75 12h10.5m-10.5 6.5h10.5");
}

.macqmobic {
  cx: 5px;
  cy: 18.5px;
  r: 1.5px;
}

.nj-qotb6t {
  cx: 5px;
  cy: 5.5px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2w0_hbmh {
  cx: 5px;
  cy: 12px;
  r: 1.5px;
}
</style><g class="x2cwu0gfd"><path class="gswzab2hg"/><circle class="nj-qotb6t"/><circle class="y2w0_hbmh"/><circle class="macqmobic"/></g>`,
		"fallback": "iconoven:bullet-style-sharp",
	});
}

export default Component;
