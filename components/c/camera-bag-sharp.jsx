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
		"content": `<style>.sz7o-pbpi {
  cx: 12px;
  cy: 16.25px;
  r: 2px;
}

.u8_vc4yqr {
  d: path("M2.75 8.25h18.5v12.5H2.75zm6 0v-3.5h6.5v3.5M2.75 12h18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="u8_vc4yqr"/><circle class="sz7o-pbpi"/></g>`,
		"fallback": "iconoven:camera-bag-sharp",
	});
}

export default Component;
