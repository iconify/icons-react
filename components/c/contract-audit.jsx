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
		"content": `<style>.dhqtyub_i {
  d: path("M11.8 19H2.5V3h18v9.3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xuwa0cc1t {
  d: path("M8.5 7L6 9.75l2.5 2.75m5-5.5L16 9.75l-2.5 2.75m1.25 5.5l2 2L21 15.75");
}
</style><g class="ulnmmdpxh"><path class="dhqtyub_i"/><path class="xuwa0cc1t"/></g>`,
		"fallback": "uix-sharp:contract-audit",
	});
}

export default Component;
