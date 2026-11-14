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
		"content": `<style>.w_gar5bmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 13c2-2 5.5-2.5 8-2.25c1-1.25 3.5-1.75 5 .25c.5 1 0 2.75-1.5 3.25c-2.5.5-6 .5-8.5.5c-1.5 0-2.5-.75-3-1.75Zm0 0c-3 .5-5.5-1-5.5-4c0-2.75 3.25-4 4.75-2.25C9 8.25 7.75 10 6.25 9.5m-3.75 8h19m-6 0l1.25-2.75L18 17.5m-8 0l1.25-2.75l1.25 2.75m7-5.5h.01");
}
</style><path class="w_gar5bmk"/>`,
		"fallback": "uix-sharp:exotic-pet",
	});
}

export default Component;
