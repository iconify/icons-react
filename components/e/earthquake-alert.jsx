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
		"content": `<style>.e17uprz5n {
  d: path("M15.2 20.5H4v-18h13v9.2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wg2llmbhq {
  d: path("m4 9l3.5 3.5l3-3.5l3 3.5l3.5-3m1 5V18m0 3h.01");
}
</style><g class="ulnmmdpxh"><path class="e17uprz5n"/><path class="wg2llmbhq"/></g>`,
		"fallback": "uix-sharp:earthquake-alert",
	});
}

export default Component;
