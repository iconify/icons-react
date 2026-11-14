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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whd5q_zak {
  d: path("M5.5 21.5v-5h3v5m2.75-6.5h3v3h-3ZM16 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.zr0uhwbtu {
  d: path("m2.5 13l7.25-6.5L17 13v8.5H2.5Z");
}
</style><g class="ulnmmdpxh"><path class="zr0uhwbtu"/><path class="whd5q_zak"/></g>`,
		"fallback": "uix-sharp:holiday-cottage",
	});
}

export default Component;
