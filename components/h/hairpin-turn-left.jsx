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
		"content": `<style>.bl68eib_g {
  d: path("M7 12.5L4.5 15L7 17.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q_q_vbbou {
  d: path("M19.5 20.5V7.75a4.25 4.25 0 0 0-8.5 0v3.75A3.5 3.5 0 0 1 7.5 15h-3");
}
</style><g class="hntgybcog"><path class="q_q_vbbou"/><path class="bl68eib_g"/></g>`,
		"fallback": "uix:hairpin-turn-left",
	});
}

export default Component;
