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

.jummnrbdg {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3M3 7h18");
}

.rf8p85b7v {
  d: path("M12 14.5c-2.25-2-1.5-4.5 0-4.5s2.25 2.5 0 4.5m0 0c2.75-1 4.75 1 4 2.25s-3.5.75-4-2.25m0 0c-.5 3-3.25 3.5-4 2.25s1.25-3.25 4-2.25");
}
</style><g class="hntgybcog"><path class="jummnrbdg"/><path class="rf8p85b7v"/></g>`,
		"fallback": "uix:convection-oven",
	});
}

export default Component;
