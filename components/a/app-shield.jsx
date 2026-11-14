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
		"content": `<style>.oqjv83bau {
  d: path("M11.7 18.5H2.5V3h18v8.9M2.5 8h18");
}

.rjy7cgbpi {
  d: path("m18 14l3.5 1.25V18c0 2-1.5 3.25-3.5 4c-2-.75-3.5-2-3.5-4v-2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oqjv83bau"/><path class="rjy7cgbpi"/></g>`,
		"fallback": "uix-sharp:app-shield",
	});
}

export default Component;
