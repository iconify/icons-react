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
		"content": `<style>.bt7tsfbii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 7.5h1.75A2.625 2.625 0 0 1 9.5 10.125v3.75A2.625 2.625 0 0 1 6.875 16.5h-1.75A2.625 2.625 0 0 1 2.5 13.875v-3.75A2.625 2.625 0 0 1 5.125 7.5m6.875 3l3-3m-2.75 0H15v2.75m-3 3.25l3 3m-2.75 0H15v-2.75M19.25 3.5h.5a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-.5a1.75 1.75 0 0 1-1.75-1.75v-.5a1.75 1.75 0 0 1 1.75-1.75m0 13h.5a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-.5a1.75 1.75 0 0 1-1.75-1.75v-.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="bt7tsfbii"/>`,
		"fallback": "uix:cross-post",
	});
}

export default Component;
