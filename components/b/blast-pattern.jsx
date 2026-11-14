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
		"content": `<style>.y8nqgwbyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7V2.5H7m10 0h4.5V7m0 10v4.5H17m-10 0H2.5V17M5.25 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-11 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-11 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="y8nqgwbyj"/>`,
		"fallback": "uix:blast-pattern",
	});
}

export default Component;
