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
		"content": `<style>.it2yb1hje {
  d: path("m12 2.5l8.5 5v9l-8.5 5l-8.5-5v-9Z");
}

.jdcw1mb1z {
  d: path("m3.5 7.5l8.5 5l8.5-5m-8.5 5v9M7.75 5l8.5 5m0-5l-8.5 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="it2yb1hje"/><path class="jdcw1mb1z"/></g>`,
		"fallback": "uix-sharp:block",
	});
}

export default Component;
