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
		"content": `<style>.pt5a8jq-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 15V5.75a2.75 2.75 0 0 1 5.5 0V15A4 4 0 1 1 6 15m2.75-2.5V18M18 15v6m-2.5-4.5l5 3m-5 0l5-3");
}
</style><path class="pt5a8jq-c"/>`,
		"fallback": "uix:hypothermia",
	});
}

export default Component;
