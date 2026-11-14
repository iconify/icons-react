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
		"content": `<style>.w_qjif_sr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5h19v11h-19Zm-.348-4.976L20.967 2.88l.348 2.476L2.5 8ZM12 13.25v5.5M9.5 14.5l5 3m-5 0l5-3");
}
</style><path class="w_qjif_sr"/>`,
		"fallback": "uix-sharp:chest-freezer",
	});
}

export default Component;
