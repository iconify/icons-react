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
		"content": `<style>.k7ur-sb6x {
  d: path("M8 2.5h8V8h5.5v8H16v5.5H8V16H2.5V8H8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wp416ze0n {
  d: path("M7.25 9.5L4.75 12l2.5 2.5");
}
</style><g class="ulnmmdpxh"><path class="k7ur-sb6x"/><path class="wp416ze0n"/></g>`,
		"fallback": "uix-sharp:dpad-left",
	});
}

export default Component;
