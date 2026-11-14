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
		"content": `<style>.av60y237b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c1-4 5-6.5 9.5-6.5s8.5 2.5 9.5 6.5Zm15-17L13.75 14m1.5-11.25l4.5 1.5");
}
</style><path class="av60y237b"/>`,
		"fallback": "uix-sharp:avalanche-probe",
	});
}

export default Component;
