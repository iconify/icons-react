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
		"content": `<style>.hjqc_ac4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 12h12m-5.25 5.25L15.75 12L10.5 6.75m9.75 12.5V4.75");
}
</style><path class="hjqc_ac4t"/>`,
		"fallback": "iconoven:arrow-right-to-line",
	});
}

export default Component;
