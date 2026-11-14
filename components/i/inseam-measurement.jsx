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

.p_hpofbuw {
  d: path("M12 16v5.5M11 17l1-1l1 1m-2 3.5l1 1l1-1");
}

.rl14ns7at {
  d: path("M7 2.5h10l4 19h-4.5L12 7.5l-4.5 14H3Z");
}
</style><g class="hntgybcog"><path class="rl14ns7at"/><path class="p_hpofbuw"/></g>`,
		"fallback": "uix:inseam-measurement",
	});
}

export default Component;
