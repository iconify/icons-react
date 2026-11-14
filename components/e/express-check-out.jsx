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
		"content": `<style>.l_h_fmbgn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.416 19.083L8.75 18.25l-3.75 2V3h14v8.7m-.65.55h-6.1v5.3M8.5 6.5h7m-7 3h7m4.25 5.25L16 18h4.25L17 21.5");
}
</style><path class="l_h_fmbgn"/>`,
		"fallback": "uix-sharp:express-check-out",
	});
}

export default Component;
