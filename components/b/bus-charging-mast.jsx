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
		"content": `<style>.ezwe-lb2x {
  d: path("M2.5 3h19m-19 14v-6A1.5 1.5 0 0 1 4 9.5h15l2.5 2.5v5Z");
}

.gjr4_eb9h {
  d: path("M5 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM9 9.5v-3L13 3M2.5 13h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ezwe-lb2x"/><path class="gjr4_eb9h"/></g>`,
		"fallback": "uix-sharp:bus-charging-mast",
	});
}

export default Component;
