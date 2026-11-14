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
		"content": `<style>.kizbsibzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 21.5l1-9.25m3 9.25l-1-9.25M5 21.5h14m-7-19c2 2.5 4 4.25 4 6a4 4 0 0 1-8 0c0-1.75 2-3.5 4-6");
}
</style><path class="kizbsibzz"/>`,
		"fallback": "uix:flare-tip",
	});
}

export default Component;
