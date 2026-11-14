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
		"content": `<style>.vvf914b_t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3h16M8 3v5m8-5v5M3 8h18v13.5H3Zm5.25 3l7.5 7.5m0-7.5l-7.5 7.5");
}
</style><path class="vvf914b_t"/>`,
		"fallback": "uix-sharp:closed-sign",
	});
}

export default Component;
