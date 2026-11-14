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
		"content": `<style>.fa8jygytk {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ud8e23bmd {
  d: path("M5 13h14l-1.5 8.5h-11Zm0 0c-1.5 0-1.5-3 1-3c0-2.5 3-3.5 6-3.5s6 1 6 3.5c2.5 0 2.5 3 1 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ud8e23bmd"/><path class="fa8jygytk"/></g>`,
		"fallback": "uix-sharp:cupcake-kids",
	});
}

export default Component;
