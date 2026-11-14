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
		"content": `<style>.aa_zn31rk {
  d: path("M6 7a6 2.25 0 0 1 12 0v11.75a6 2.25 0 0 1-12 0Z");
}

.gekkhac4j {
  d: path("M10.5 5V3h3v2M6 7a6 2.25 0 0 0 12 0M6 11a6 2.25 0 0 0 12 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aa_zn31rk"/><path class="gekkhac4j"/></g>`,
		"fallback": "uix-sharp:battery-cell-cylindrical",
	});
}

export default Component;
