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
		"content": `<style>.lf_76f08r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 15.5V9h-4V6h4V2.5h3V6h4v3h-4v6.5m-6.5 0h10v6H7Z");
}
</style><path class="lf_76f08r"/>`,
		"fallback": "uix-sharp:crucifix-standing",
	});
}

export default Component;
