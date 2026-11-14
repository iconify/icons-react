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
		"content": `<style>.wk8qf8l1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.625 2.5h8.75A2.625 2.625 0 0 1 19 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 5 18.875V5.125A2.625 2.625 0 0 1 7.625 2.5M2.5 21.5h19M9.75 2.5v19m4.5-19v19M5 7.25h14M5 12h14M5 16.75h14");
}
</style><path class="wk8qf8l1f"/>`,
		"fallback": "uix:bank-building-modern",
	});
}

export default Component;
