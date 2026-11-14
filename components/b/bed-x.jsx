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
		"content": `<style>.nr2-ivrbg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4v15m0-7h18m0-3.5V12m-5.5 3.5l5 5m0-5l-5 5");
}
</style><path class="nr2-ivrbg"/>`,
		"fallback": "uix:bed-x",
	});
}

export default Component;
