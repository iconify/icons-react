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
		"content": `<style>.xum2q232j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6m-3 0v4m-5.5 0h11m-6.375 0h1.75A2.625 2.625 0 0 1 15.5 9.125v6.75a2.625 2.625 0 0 1-2.625 2.625h-1.75A2.625 2.625 0 0 1 8.5 15.875v-6.75A2.625 2.625 0 0 1 11.125 6.5m.875 12v3m-3.5-9h7");
}
</style><path class="xum2q232j"/>`,
		"fallback": "uix:dose-ml",
	});
}

export default Component;
