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
		"content": `<style>.e82od5b_x {
  d: path("M5 15v-2.5a7 7 0 0 1 14 0V15M3.5 15h17v6h-17Z");
}

.r4r5fmnuk {
  d: path("M10.5 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e82od5b_x"/><path class="r4r5fmnuk"/></g>`,
		"fallback": "uix-sharp:baby-hat",
	});
}

export default Component;
