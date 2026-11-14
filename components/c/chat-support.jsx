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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s8-fj2bft {
  d: path("M10.25 9.25a2.25 2.25 0 1 1 2.25 2.25v.75m0 3h.01");
}

.wfa-2cbyv {
  d: path("M8.25 18.75a8.5 8.5 0 1 0-3-3L3.5 20.5Z");
}
</style><g class="hntgybcog"><path class="wfa-2cbyv"/><path class="s8-fj2bft"/></g>`,
		"fallback": "uix:chat-support",
	});
}

export default Component;
