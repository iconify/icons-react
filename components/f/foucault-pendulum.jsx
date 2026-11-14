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
		"content": `<style>.shrcpvbed {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12m-6 0l3.75 9m-2 3a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m7.75 4.454a19 19 0 0 1-19 0");
}
</style><path class="shrcpvbed"/>`,
		"fallback": "uix:foucault-pendulum",
	});
}

export default Component;
