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
		"content": `<style>.nzmovlcil {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.598 9.977l6.25-5.469a1.75 1.75 0 0 1 2.304 0l6.25 5.469A1.75 1.75 0 0 1 20 11.294v6.956A1.75 1.75 0 0 1 18.25 20H5.75A1.75 1.75 0 0 1 4 18.25v-6.956a1.75 1.75 0 0 1 .598-1.317M9.25 14.5h5.5");
}
</style><path class="nzmovlcil"/>`,
		"fallback": "uix:home-minus",
	});
}

export default Component;
