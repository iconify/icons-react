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

.q2modybhn {
  d: path("m3.5 7l8.5 4.5L20.5 7M12 11.5v10M8.5 7h.01M12 7h.01m3.49 0h.01");
}

.vyk2jgbrd {
  d: path("M12 2.5L20.5 7v10L12 21.5L3.5 17V7Z");
}
</style><g class="hntgybcog"><path class="vyk2jgbrd"/><path class="q2modybhn"/></g>`,
		"fallback": "uix:category-board-games",
	});
}

export default Component;
