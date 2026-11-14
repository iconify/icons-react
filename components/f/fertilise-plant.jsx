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
		"content": `<style>.kw6_0ex7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 7a3 3 0 1 0 5-3Zm5-3l2-1.25M8 21.5V16m0 2c0-3-2.5-4.5-5.5-4.5C2.5 16.5 5 18 8 18m0-2c0-2.5 1.5-4 3.5-4c0 2.5-1.5 4-3.5 4m6.5-4.25h.01m.74 3h.01m-.76 3h.01");
}
</style><path class="kw6_0ex7j"/>`,
		"fallback": "uix:fertilise-plant",
	});
}

export default Component;
