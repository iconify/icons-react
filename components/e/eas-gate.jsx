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
		"content": `<style>.b3wy3sbfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.5zA2.25 2.25 0 0 1 7 4.75v13.5a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25V4.75A2.25 2.25 0 0 1 4.75 2.5m14.5 0za2.25 2.25 0 0 1 2.25 2.25v13.5a2.25 2.25 0 0 1-2.25 2.25A2.25 2.25 0 0 1 17 18.25V4.75a2.25 2.25 0 0 1 2.25-2.25M2.5 21.5H7m10 0h4.5M9.75 7.5H11m2 0h1.25m-4.5 4H11m2 0h1.25m-4.5 4H11m2 0h1.25");
}
</style><path class="b3wy3sbfm"/>`,
		"fallback": "uix:eas-gate",
	});
}

export default Component;
