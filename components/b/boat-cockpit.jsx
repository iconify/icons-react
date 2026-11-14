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
		"content": `<style>.z0wa-vble {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14h18l-2.5 6H6Zm5.75-6a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M12 3.25V14M7.25 8h9.5");
}
</style><path class="z0wa-vble"/>`,
		"fallback": "uix:boat-cockpit",
	});
}

export default Component;
