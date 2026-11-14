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
		"content": `<style>.czfg-7bil {
  d: path("M4 3h7.5a2 2 0 0 1 2 2v3.75M8 9l1 12h9l1-12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lb7lqnp0y {
  d: path("M8.25 12q2.625-2.25 5.25 0t5.25 0");
}
</style><g class="hntgybcog"><path class="czfg-7bil"/><path class="lb7lqnp0y"/></g>`,
		"fallback": "uix:draft-beer-pour",
	});
}

export default Component;
