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
		"content": `<style>.on5l0gbkg {
  d: path("M2 6h20v12H2Z");
}

.q3n0_ouit {
  d: path("M5 15V9h1.25a1.25 1.25 0 0 1 0 2.5H5m5.25 3.5V9h1.25a1.25 1.25 0 0 1 0 2.5h-1.25m1.25 0L13 15m2.75-3a1.5 3 0 1 0 3 0a1.5 3 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="on5l0gbkg"/><path class="q3n0_ouit"/></g>`,
		"fallback": "uix-sharp:badge-pro",
	});
}

export default Component;
