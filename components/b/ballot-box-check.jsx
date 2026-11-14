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
		"content": `<style>.zocazpbkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h17v10.5h-17Zm5 3.5h7M9 5.5l2.25 2.25L15.5 3.5");
}
</style><path class="zocazpbkd"/>`,
		"fallback": "uix-sharp:ballot-box-check",
	});
}

export default Component;
