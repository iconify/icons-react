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
		"content": `<style>.mau00xb0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17.75L6 6.75l3.25 11M4 14h4m3.25-7.25v11h1.5a5.5 5.5 0 0 0 0-11Zm8.5 1.5q1.5 1.5 1.5 3.75c0 2.25-.5 2.75-1.5 3.75");
}
</style><path class="mau00xb0j"/>`,
		"fallback": "iconoven:audio-description",
	});
}

export default Component;
