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
		"content": `<style>.fhxdp_e-n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 12C8 9.5 9.75 8.25 12 8.25S16 9.5 17.5 12c-1.5 2.5-3.25 3.75-5.5 3.75S8 14.5 6.5 12Zm5.5 0h.01M4.5 4.5h.01m14.99 0h.01M4.5 19.5h.01m14.99 0h.01");
}
</style><path class="fhxdp_e-n"/>`,
		"fallback": "uix-sharp:eye-calibration",
	});
}

export default Component;
