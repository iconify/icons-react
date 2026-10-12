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
		"content": `<style>.mkbj89bok {
  d: path("M2.75 6.5c3.5 0 4 11 7.5 11m3.5 0c3.5 0 4-5.5 7.5-5.5");
}

.nm_s7seyo {
  cx: 12px;
  cy: 17.5px;
  r: 1.75px;
}

.pftf-cbrq {
  cx: 12px;
  cy: 6.5px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xdl7njx2b {
  d: path("M2.75 17.5c3.5 0 4-11 7.5-11m3.5 0h7.5");
}
</style><g class="x2cwu0gfd"><path class="mkbj89bok"/><circle class="nm_s7seyo"/><path class="xdl7njx2b"/><circle class="pftf-cbrq"/></g>`,
		"fallback": "iconoven:chart-bump-sharp",
	});
}

export default Component;
