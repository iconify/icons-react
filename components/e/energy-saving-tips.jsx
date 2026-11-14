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
		"content": `<style>.gc3sgybko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 16v-1.5a6 6 0 1 1 6 0V16Zm.5 2.75h5M9 21.5h3m1-2.75Q16 16 21 17q-2 4.5-8 1.75Z");
}
</style><path class="gc3sgybko"/>`,
		"fallback": "uix-sharp:energy-saving-tips",
	});
}

export default Component;
