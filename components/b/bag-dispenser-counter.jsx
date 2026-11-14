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
		"content": `<style>.m5tkm-laz {
  d: path("M2.5 13.5h19v8h-19Zm0 0l3-3.5h13l3 3.5");
}

.u5eqt7_wb {
  d: path("M8 11.75V2.5h2.5V6h3V2.5H16v9.25m-10 0h12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m5tkm-laz"/><path class="u5eqt7_wb"/></g>`,
		"fallback": "uix-sharp:bag-dispenser-counter",
	});
}

export default Component;
