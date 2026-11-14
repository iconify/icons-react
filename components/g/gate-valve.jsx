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
		"content": `<style>.oj6_yyb7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14h5.5v-2.5h7V14H21M3 19.5h5.5v2h7v-2H21m-18-7V21m18-8.5V21M12 7.5v4M7 5a5 2.5 0 1 0 10 0A5 2.5 0 1 0 7 5");
}
</style><path class="oj6_yyb7b"/>`,
		"fallback": "uix:gate-valve",
	});
}

export default Component;
