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
		"content": `<style>.ytveyd-xf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19m-19 0V10A2.25 2.25 0 0 0 7 10V6.5m2.75 0V10a2.25 2.25 0 0 0 4.5 0V6.5m2.75 0V10a2.25 2.25 0 0 0 4.5 0V6.5m-19 9.25q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="ytveyd-xf"/>`,
		"fallback": "uix:bridge-pontoon",
	});
}

export default Component;
