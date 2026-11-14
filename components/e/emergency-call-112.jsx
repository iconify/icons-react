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
		"content": `<style>.gw6rhm81e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h3L9.5 7l-2 1.5a10 10 0 0 0 4.25 4.25l1.5-2l4.5 1.5v3a2.5 2.5 0 0 1-2.5 2.5A15.25 15.25 0 0 1 2.5 5A2.5 2.5 0 0 1 5 2.5M20.75 14v4.25m0 3h.01");
}
</style><path class="gw6rhm81e"/>`,
		"fallback": "uix:emergency-call-112",
	});
}

export default Component;
