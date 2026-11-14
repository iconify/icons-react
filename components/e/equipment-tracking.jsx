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
		"content": `<style>.f483h9b-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 9.75l-2.75-3a3 3 0 1 1 5.5 0ZM2.5 12.5h19v9h-19Zm0 3.5h19");
}
</style><path class="f483h9b-w"/>`,
		"fallback": "uix-sharp:equipment-tracking",
	});
}

export default Component;
