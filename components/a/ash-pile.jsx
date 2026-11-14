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
		"content": `<style>.filu1wuwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20c1-3.5 3-5 5.5-5c.5-3 2-4.5 4-4.5c2.5 0 4 2 4.5 4c2.5 0 4.5 2.5 5 5.5ZM11 7.5q-1.5-1.75.5-2.75t1-2.25M9.5 17h.01m5.49.5h.01");
}
</style><path class="filu1wuwg"/>`,
		"fallback": "uix:ash-pile",
	});
}

export default Component;
