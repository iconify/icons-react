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
		"content": `<style>.le0ri9bfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10H21m-2.75-2.75L21 10l-2.75 2.75M5 10v4m5-4v4m5-4v4");
}
</style><path class="le0ri9bfg"/>`,
		"fallback": "uix:chart-axis-x",
	});
}

export default Component;
