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
		"content": `<style>.dmoe1q0hz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.349 2.5h3.302a1.75 1.75 0 0 1 1.692 1.305l4.079 15.5A1.75 1.75 0 0 1 17.73 21.5H6.27a1.75 1.75 0 0 1-1.692-2.195l4.079-15.5A1.75 1.75 0 0 1 10.349 2.5M12 5.5v2m0 3V13m0 3v2.75");
}
</style><path class="dmoe1q0hz"/>`,
		"fallback": "uix:airfield",
	});
}

export default Component;
