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
		"content": `<style>.em4j34a7u {
  d: path("M2.5 6h19v12h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wg8lf43_x {
  d: path("M5.25 12a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm10-6v2.5m3-2.5v2.5m-3 9.5v-2.5m3 2.5v-2.5");
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="wg8lf43_x"/></g>`,
		"fallback": "uix-sharp:circle-template",
	});
}

export default Component;
