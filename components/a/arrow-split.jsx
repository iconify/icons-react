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
		"content": `<style>.gtdkf60xt {
  d: path("M4.75 10.5V5.75H9.5m5 0h4.75v4.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8bxj4b5o {
  d: path("M12 21v-8L5 6m7 7l7-7");
}
</style><g class="hntgybcog"><path class="j8bxj4b5o"/><path class="gtdkf60xt"/></g>`,
		"fallback": "uix:arrow-split",
	});
}

export default Component;
