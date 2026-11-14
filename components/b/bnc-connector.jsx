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
		"content": `<style>.t_s3maczv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h4m1.75-3.5h3.5a1.75 1.75 0 0 1 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 8.25 8.5m7.75-2zA2.5 2.5 0 0 1 18.5 9v6a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V9A2.5 2.5 0 0 1 16 6.5m2.5 5.5h3M16 3.75h.01");
}
</style><path class="t_s3maczv"/>`,
		"fallback": "uix:bnc-connector",
	});
}

export default Component;
