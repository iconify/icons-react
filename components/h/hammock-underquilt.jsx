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
		"content": `<style>.hn9ccnbac {
  d: path("M3.5 4.5V21m17-16.5V21M3.5 7q8.5 9 17 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ikxma6bmp {
  d: path("M6.5 13.5q5.5 6.5 11 0");
}
</style><g class="hntgybcog"><path class="hn9ccnbac"/><path class="ikxma6bmp"/></g>`,
		"fallback": "uix:hammock-underquilt",
	});
}

export default Component;
