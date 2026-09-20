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
		"content": `<style>.cpo3zsjsl {
  d: path("m16 13 -4 4 4 4");
}

.ddr0zpdgr {
  d: path("M8 6a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yfx_djbhn {
  d: path("m6 13 4 4 -4 4");
}

.zugrvnb7t {
  d: path("M2 13h20");
}
</style><g class="nrj6p8qat"><path class="ddr0zpdgr"/><path class="zugrvnb7t"/><path class="yfx_djbhn"/><path class="cpo3zsjsl"/></g>`,
		"fallback": "iconmind:drought-outline-regular",
	});
}

export default Component;
