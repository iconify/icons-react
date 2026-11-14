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
		"content": `<style>.r1sr_jbpw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 15l4.5-7.5L11 11l3.5-7L20 15M2.5 19.5q2.375-2 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="r1sr_jbpw"/>`,
		"fallback": "uix-sharp:chart-symbol-rock",
	});
}

export default Component;
