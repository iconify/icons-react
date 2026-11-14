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
		"content": `<style>.hrvdjvb5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 20.5v-10a6.5 6.5 0 0 1 13 0v10l-2.5-2l-2 2l-2-2l-2 2l-2-2Zm4-9.5h.01m4.99 0h.01");
}
</style><path class="hrvdjvb5x"/>`,
		"fallback": "uix-sharp:hallucination",
	});
}

export default Component;
