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
		"content": `<style>.le0tehbsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.8 18H2.5V2.5H18v12.3M10.25 2.5V18M2.5 10.25H18M14.75 18l2 2L21 15.75");
}
</style><path class="le0tehbsv"/>`,
		"fallback": "uix-sharp:grid-check",
	});
}

export default Component;
