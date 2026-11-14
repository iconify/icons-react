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
		"content": `<style>.uwig1jbtq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h19m-17 0v10m15-10v10M8 10v8m8.5-8v8m-12-8V4.5h3V7h3V4.5h3V10m0-3h5");
}
</style><path class="uwig1jbtq"/>`,
		"fallback": "uix:assembly-workbench",
	});
}

export default Component;
