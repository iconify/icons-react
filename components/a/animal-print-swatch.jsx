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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9kayccxa {
  d: path("M9.27 6.386a2.25 2.25 0 1 1-2.494.668m10.838 4.216a2.25 2.25 0 1 1-.668-2.494m-9.06 7.494A2.25 2.25 0 1 1 10 17.75");
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="x9kayccxa"/></g>`,
		"fallback": "uix-sharp:animal-print-swatch",
	});
}

export default Component;
