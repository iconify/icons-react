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
		"content": `<style>.wb9c9lb_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4h7a3.5 3 0 0 1-7 0ZM12 7v3.5m-2 0h4m-10.5 3h7a3.5 3 0 0 1-7 0Zm3.5 3v4m-2 0h4m4.5-7h7a3.5 3 0 0 1-7 0Zm3.5 3v4m-2 0h4");
}
</style><path class="wb9c9lb_f"/>`,
		"fallback": "uix-sharp:champagne-tower",
	});
}

export default Component;
