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
		"content": `<style>.cczv1ubmc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21.5V7l3-3.5h6L18 7v14.5ZM6 11h12M6 14.5h12M6 18h12");
}
</style><path class="cczv1ubmc"/>`,
		"fallback": "uix:first-officer-epaulette",
	});
}

export default Component;
