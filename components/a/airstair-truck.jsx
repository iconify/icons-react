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
		"content": `<style>.bt-dvlb0h {
  d: path("M21.5 17.5v-3H9v-4H5l-2.5 3v4Z");
}

.nb2_3n29l {
  d: path("M11.5 14.5V12H14V9.5h2.5V7H19V4.5h2.5v10m-18 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm13 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bt-dvlb0h"/><path class="nb2_3n29l"/></g>`,
		"fallback": "uix-sharp:airstair-truck",
	});
}

export default Component;
