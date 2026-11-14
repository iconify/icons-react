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
		"content": `<style>.uabaffbnf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15.5h18c0 3.5-3.5 5.5-9 5.5s-9-2-9-5.5Zm4.5-3q-1.875-2.25 0-4.5t0-4.5m4.5 9q-1.875-2.25 0-4.5t0-4.5m4.5 9q-1.875-2.25 0-4.5t0-4.5");
}
</style><path class="uabaffbnf"/>`,
		"fallback": "uix-sharp:evaporation",
	});
}

export default Component;
