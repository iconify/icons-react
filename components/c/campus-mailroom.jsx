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
		"content": `<style>.en--rv-2s {
  d: path("M7 7h10a3.5 3.5 0 0 1 3.5 3.5v7h-17v-7A3.5 3.5 0 0 1 7 7Z");
}

.ufrklha3n {
  d: path("M10.5 17.5v-7A3.5 3.5 0 0 0 7 7m6.5 10.5v4m3-14.5V2.75m0 0h3V5h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="en--rv-2s"/><path class="ufrklha3n"/></g>`,
		"fallback": "uix-sharp:campus-mailroom",
	});
}

export default Component;
