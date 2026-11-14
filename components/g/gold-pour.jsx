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
		"content": `<style>.e8rry7ekn {
  d: path("m7 15.5l1.5 5h11l1.5-5");
}

.h_plg4s9u {
  d: path("m12.5 6.5l-3.75 4.75l-5.25-3l2-5.75Zm0 0Q14 8 14 10.5v7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="h_plg4s9u"/><path class="e8rry7ekn"/></g>`,
		"fallback": "uix-sharp:gold-pour",
	});
}

export default Component;
