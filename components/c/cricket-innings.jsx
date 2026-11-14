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
		"content": `<style>.gqtihqnbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.5zA2.5 2.5 0 0 1 8.75 5v8a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V5a2.5 2.5 0 0 1 2.5-2.5m0 13v6m7-14.5v14.5M16.75 7v14.5M20.25 7v14.5m-7-14.5h7");
}
</style><path class="gqtihqnbs"/>`,
		"fallback": "uix:cricket-innings",
	});
}

export default Component;
