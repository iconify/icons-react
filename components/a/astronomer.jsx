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
		"content": `<style>.pl8er39hh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.752 8.643l6.496-3.75a1.75 1.75 0 0 1 2.39.64l.25.434a1.75 1.75 0 0 1-.64 2.39l-6.496 3.75a1.75 1.75 0 0 1-2.39-.64l-.25-.434a1.75 1.75 0 0 1 .64-2.39M15 10.25L11.5 21M15 10.25L19 21M2.5 6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m0 14.5c0-4.5 1.25-7.5 3.5-7.5c1.25 0 2 .5 2.5 1.5");
}
</style><path class="pl8er39hh"/>`,
		"fallback": "uix:astronomer",
	});
}

export default Component;
