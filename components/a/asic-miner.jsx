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
		"content": `<style>.m03l82ghx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 5.5h10v10H7Zm3-3v3m4-3v3M4 9h3m-3 3h3m10-3h3m-3 3h3m-10 3.5v5m4-5v5m-11.5 0h19");
}
</style><path class="m03l82ghx"/>`,
		"fallback": "uix-sharp:asic-miner",
	});
}

export default Component;
