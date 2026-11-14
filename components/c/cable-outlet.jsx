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
		"content": `<style>.e1dhuiges {
  d: path("M3.5 2.5h17v16h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgqn_0f_u {
  d: path("M8 7h8v5.5h-1.5V14h-5v-1.5H8Zm4 7v7.5");
}
</style><g class="ulnmmdpxh"><path class="e1dhuiges"/><path class="zgqn_0f_u"/></g>`,
		"fallback": "uix-sharp:cable-outlet",
	});
}

export default Component;
