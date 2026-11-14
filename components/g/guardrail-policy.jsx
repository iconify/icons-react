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
		"content": `<style>.mzjrrkbcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h19v5.5h-19ZM6 3v3m0 5.5V20m9.5-17v3m0 5.5v3.3m-.75 3.2l2 2L21 15.75");
}
</style><path class="mzjrrkbcv"/>`,
		"fallback": "uix-sharp:guardrail-policy",
	});
}

export default Component;
