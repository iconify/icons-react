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
		"content": `<style>.p7ilpcl0b {
  d: path("M5 5.5h14M3.5 9h17a8.5 8.5 0 0 1-17 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-mxfsbij {
  d: path("M10.5 13.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><g class="ulnmmdpxh"><path class="p7ilpcl0b"/><path class="w-mxfsbij"/></g>`,
		"fallback": "uix-sharp:camera-dome",
	});
}

export default Component;
