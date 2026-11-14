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
		"content": `<style>.ezleplbmu {
  d: path("m16 9.5l2.5 2.5l-2.5 2.5l-2.5-2.5Z");
}

.s2cegh51x {
  d: path("M5.5 7h13a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s2cegh51x"/><path class="ezleplbmu"/></g>`,
		"fallback": "uix-sharp:component-boolean-prop",
	});
}

export default Component;
