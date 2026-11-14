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
		"content": `<style>.xr_d0nsdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 8h1A1.75 1.75 0 0 1 7 9.75v4.5A1.75 1.75 0 0 1 5.25 16h-1a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 4.25 8m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 12.5 16h-1a1.75 1.75 0 0 1-1.75-1.75v-4.5A1.75 1.75 0 0 1 11.5 8m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v4.5A1.75 1.75 0 0 1 19.75 16h-1A1.75 1.75 0 0 1 17 14.25v-4.5A1.75 1.75 0 0 1 18.75 8m-14 4h.01M12 12h.01m7.24 0h.01");
}
</style><path class="xr_d0nsdf"/>`,
		"fallback": "uix:input-otp",
	});
}

export default Component;
