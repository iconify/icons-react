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
		"content": `<style>.dd49vpb5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c1-4 5-6.5 9.5-6.5s8.5 2.5 9.5 6.5Zm15-17L13.75 14m1.5-11.25l4.5 1.5");
}
</style><path class="dd49vpb5n"/>`,
		"fallback": "uix:avalanche-probe",
	});
}

export default Component;
