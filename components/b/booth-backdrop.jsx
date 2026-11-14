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
		"content": `<style>.r00_92b6a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19l-1.5 2l1.5 2h-19l1.5-2Zm4.625 4h9.75A2.625 2.625 0 0 1 19.5 9.125v5.75a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 14.875v-5.75A2.625 2.625 0 0 1 7.125 6.5M7 17.5V21m10-3.5V21M5 21h4m6 0h4");
}
</style><path class="r00_92b6a"/>`,
		"fallback": "uix:booth-backdrop",
	});
}

export default Component;
