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
		"content": `<style>.n7hn2wb-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5V7m0 13.5h17M3.5 7A13.5 13.5 0 0 1 17 20.5");
}
</style><path class="n7hn2wb-f"/>`,
		"fallback": "uix-sharp:door-swing",
	});
}

export default Component;
