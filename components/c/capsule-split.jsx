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
		"content": `<style>.gonsmsbdc {
  fill: currentColor;
  d: path("m9.75 9.75l-5 5a3.25 3.25 0 0 0 4.5 4.5l5-5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p4i731bfw {
  d: path("m9.75 9.75l5-5a3.25 3.25 0 0 1 4.5 4.5l-5 5Z");
}
</style><g class="hntgybcog"><path class="gonsmsbdc"/><path class="p4i731bfw"/></g>`,
		"fallback": "uix:capsule-split",
	});
}

export default Component;
