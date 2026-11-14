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
		"content": `<style>.bx6lcab7m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.8 19H2.5V5h19v7.3m-19-2.8h19m-19 0h19M6 15h2.5m6.25 3l2 2L21 15.75");
}
</style><path class="bx6lcab7m"/>`,
		"fallback": "uix-sharp:card-check",
	});
}

export default Component;
