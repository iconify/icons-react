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
		"content": `<style>.fkumuzbsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9h14l2 11H3Zm4.5-3.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 9l2-2");
}
</style><path class="fkumuzbsr"/>`,
		"fallback": "uix:baggage-weight-limit",
	});
}

export default Component;
