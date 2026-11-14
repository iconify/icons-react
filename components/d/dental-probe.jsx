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
		"content": `<style>.js40xh43a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17.5L8 14a1.414 1.414 0 0 1 2 0a1.414 1.414 0 0 1 0 2l-3.5 3.5a1.414 1.414 0 0 1-2 0a1.414 1.414 0 0 1 0-2M10 14l7-7m0 0l1.75-1.75c2-2-.75-2.75-1.75-1");
}
</style><path class="js40xh43a"/>`,
		"fallback": "uix:dental-probe",
	});
}

export default Component;
