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
		"content": `<style>.lbv6upiks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 17.5H2.5v-13h18v7.4M2.5 9h18M6 13.5h4m8 1.25v3.5M18 21h.01");
}
</style><path class="lbv6upiks"/>`,
		"fallback": "uix-sharp:fraud-detected",
	});
}

export default Component;
