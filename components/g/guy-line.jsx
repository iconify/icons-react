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
		"content": `<style>.cpi61vtkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5L9 5.5l6.5 15ZM9 5.5v-3m0 0L21 16m0 0v4.5M9 14v6.5");
}
</style><path class="cpi61vtkp"/>`,
		"fallback": "uix-sharp:guy-line",
	});
}

export default Component;
