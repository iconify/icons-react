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
		"content": `<style>.z_q6c3bmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 20l5-15.5l5 15.5m-8.25-5h6.5m3.75 1.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0m6-3.25V20");
}
</style><path class="z_q6c3bmk"/>`,
		"fallback": "uix:font",
	});
}

export default Component;
