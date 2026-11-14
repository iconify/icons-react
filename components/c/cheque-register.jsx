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
		"content": `<style>.jhiil7c-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h15v19h-15ZM3 6h4.5M3 10h4.5M3 14h4.5M3 18h4.5m3-10.5h.01m2.49 0h4.5m-7 4.5h.01M13 12h4.5m-7 4.5h.01m2.49 0h4.5");
}
</style><path class="jhiil7c-x"/>`,
		"fallback": "uix-sharp:cheque-register",
	});
}

export default Component;
