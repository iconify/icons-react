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

.nixpmnbrv {
  fill: currentColor;
  d: path("M11.5 13.5c-1.25-.75-2.5-2-2.5-3.5a1.25 1.25 0 0 1 2.5 0a1.25 1.25 0 0 1 2.5 0c0 1.5-1.25 2.75-2.5 3.5");
}

.ocyf5ip6z {
  d: path("M8 21.5v-4c-2.5-1.75-3.5-4.25-3.5-7C4.5 6.25 7.75 3 12 3c4 0 7 2.75 7 6.75l1.5 3.5c.25.5-.1 1-.75 1H19v2.25c0 1.1-.9 2-2 2h-2v3");
}
</style><g class="hntgybcog"><path class="ocyf5ip6z"/><path class="nixpmnbrv"/></g>`,
		"fallback": "uix:head-heart",
	});
}

export default Component;
