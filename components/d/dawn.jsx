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
		"content": `<style>.wuh3hlcfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 21.25V17.5c2.75-2.5 5.5-3.75 8.75-3.75s6.75 1.5 9.75 4.25v3.25Zm8.73-9.78a3.75 3.75 0 0 1 7.2 2M10.24 10l-1.3-.75m3.31-1.26l-.75-1.3m3.5.56v-1.5m2.75 2.24l.75-1.3M19.76 10l1.3-.75");
}
</style><path class="wuh3hlcfo"/>`,
		"fallback": "iconoven:dawn",
	});
}

export default Component;
