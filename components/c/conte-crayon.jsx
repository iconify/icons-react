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
		"content": `<style>.rln27botj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.359 3.459l3.182 3.182l-9.9 9.9l-3.182-3.182ZM2.5 19.5q2.5-2.5 5 0t5 0");
}
</style><path class="rln27botj"/>`,
		"fallback": "uix-sharp:conte-crayon",
	});
}

export default Component;
