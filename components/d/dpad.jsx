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
		"content": `<style>.hn9vce5jr {
  d: path("M10.5 7L12 5.5L13.5 7m-3 10l1.5 1.5l1.5-1.5M7 10.5L5.5 12L7 13.5m10-3l1.5 1.5l-1.5 1.5");
}

.k7ur-sb6x {
  d: path("M8 2.5h8V8h5.5v8H16v5.5H8V16H2.5V8H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k7ur-sb6x"/><path class="hn9vce5jr"/></g>`,
		"fallback": "uix-sharp:dpad",
	});
}

export default Component;
