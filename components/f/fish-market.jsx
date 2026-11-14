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
		"content": `<style>.q_c9wzbnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5h18V8a3 3 0 0 1-6 0a3 3 0 0 1-6 0a3 3 0 0 1-6 0ZM4 11v10m16-10v10M7 13.75L9.75 16c1.75-3 5.75-3 7.25 0c-1.5 3-5.5 3-7.25 0L7 18.25Z");
}
</style><path class="q_c9wzbnj"/>`,
		"fallback": "uix:fish-market",
	});
}

export default Component;
