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
		"content": `<style>.sdh2e4zrl {
  d: path("M7 5.5V9a2 2 0 0 0 4 0V5.5m4 13v-13c-1.5 1.5-1.5 5.5 0 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wnjgeoakk {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM9 5.5v13");
}
</style><g class="ulnmmdpxh"><path class="wnjgeoakk"/><path class="sdh2e4zrl"/></g>`,
		"fallback": "uix-sharp:food-tour",
	});
}

export default Component;
