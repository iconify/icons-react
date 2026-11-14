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

.jbd8s1rdl {
  d: path("M5.5 9q1.5-2.5 3 0t3 0m-6 6q1.5-2.5 3 0t3 0m1.5 5l4-16");
}

.pwjncbc1x {
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5v9A3.5 3.5 0 0 1 18 20H6a3.5 3.5 0 0 1-3.5-3.5v-9A3.5 3.5 0 0 1 6 4");
}
</style><g class="hntgybcog"><path class="pwjncbc1x"/><path class="jbd8s1rdl"/></g>`,
		"fallback": "uix:graffiti-removal",
	});
}

export default Component;
