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
		"content": `<style>.kry6o1bcy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm9.803-5.303a7.5 7.5 0 0 1 0 10.606m3.123-12.374a11 11 0 0 1 0 14.142m3.871-14.755a14.5 14.5 0 0 1 0 15.368");
}
</style><path class="kry6o1bcy"/>`,
		"fallback": "uix-sharp:cell-signal",
	});
}

export default Component;
