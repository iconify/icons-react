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
		"content": `<style>.coqc08wdm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 8h10v13.5H7Zm5-5.5V8m0-5.5h4.5L15.25 4l1.25 1.5H12m-8 16h16M7 11h10M7 14h10M7 17h10m-6.75 0v4.5m3.5-4.5v4.5");
}
</style><path class="coqc08wdm"/>`,
		"fallback": "uix-sharp:bank-head-office",
	});
}

export default Component;
