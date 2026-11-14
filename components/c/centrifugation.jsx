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

.tz5ne2s-t {
  d: path("M19.361 8.5A8.5 8.5 0 1 1 12 4.25");
}

.vkp32f-gc {
  d: path("m10 2.25l2 2l-2 2m-2 6.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4 0h.01");
}
</style><g class="hntgybcog"><path class="tz5ne2s-t"/><path class="vkp32f-gc"/></g>`,
		"fallback": "uix:centrifugation",
	});
}

export default Component;
