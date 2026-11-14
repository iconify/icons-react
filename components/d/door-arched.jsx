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

.k7dbyrb5g {
  d: path("M4 21.5V10a8 8 0 0 1 16 0v11.5");
}

.sa4gg8hni {
  d: path("M7 21.5v-11a5 5 0 0 1 10 0v11m-14.5 0h19m-7.5-6h.01");
}
</style><g class="hntgybcog"><path class="k7dbyrb5g"/><path class="sa4gg8hni"/></g>`,
		"fallback": "uix:door-arched",
	});
}

export default Component;
