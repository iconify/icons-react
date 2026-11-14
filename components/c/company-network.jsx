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
		"content": `<style>.dhqqqxb4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 20.5v-16A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5v16m-11 0V12a1 1 0 0 1 1-1h4m6 0h4a1 1 0 0 1 1 1v8.5m-17.5 0h19M12 6.5v1m0 3v1m0 3v1m-5.5 0h.01m10.99 0h.01");
}
</style><path class="dhqqqxb4k"/>`,
		"fallback": "uix:company-network",
	});
}

export default Component;
