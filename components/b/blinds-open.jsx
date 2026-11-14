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
		"content": `<style>.st6i2x53s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19m-17 0v17h15v-17m-15 2.75h15M4.5 9h15m-15 2.75h15m-3 0v4.75");
}
</style><path class="st6i2x53s"/>`,
		"fallback": "uix:blinds-open",
	});
}

export default Component;
