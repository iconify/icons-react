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
		"content": `<style>.wt55htj1g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9.5c2.5 3.5 5.5 5 9 5s6.5-1.5 9-5m-15.5 3l-2 2.5m6-.75l-.75 3m5.75-3l.75 3m3.25-4.75l2 2.5");
}
</style><path class="wt55htj1g"/>`,
		"fallback": "uix:eye-closed",
	});
}

export default Component;
