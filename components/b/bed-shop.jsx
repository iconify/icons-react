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
		"content": `<style>.e88jyphuk {
  d: path("M8 20.5v-5h4v5m3-5.5v6.75m0-4.5h6.5v4.5M15 20h6.5");
}

.eqoe0pbrn {
  d: path("m3 8.5l1.5-5h15l1.5 5a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0a2.25 2.25 0 0 1-4.5 0Z");
}

.h6-e9cbrs {
  d: path("M5.25 10.75v9.75h6.95m6.55-6.05v-3.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eqoe0pbrn"/><path class="h6-e9cbrs"/><path class="e88jyphuk"/></g>`,
		"fallback": "uix-sharp:bed-shop",
	});
}

export default Component;
