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
		"content": `<style>.rapca_b1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5L4.5 6.75l3-3m-4.75 7.5L4.5 13l3-3m-4.75 7.5l1.75 1.75l3-3m3.25-11h10.5m-10.5 6.25h10.5m-10.5 6.25h7");
}
</style><path class="rapca_b1x"/>`,
		"fallback": "iconoven:eval-suite-sharp",
	});
}

export default Component;
