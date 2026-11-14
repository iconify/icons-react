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

.qq50f8b_s {
  d: path("M9 14.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1.25 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M12 3v3.5");
}

.sk1i98bzp {
  d: path("M5.5 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m7 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="sk1i98bzp"/><path class="qq50f8b_s"/></g>`,
		"fallback": "uix:grapes",
	});
}

export default Component;
