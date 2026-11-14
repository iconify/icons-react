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
		"content": `<style>.bc-k4mbll {
  d: path("M16 7h-4v5h4v5h-4");
}

.fom-n-bna {
  d: path("M8.25 3h7.5A5.25 5.25 0 0 1 21 8.25v7.5A5.25 5.25 0 0 1 15.75 21h-7.5A5.25 5.25 0 0 1 3 15.75v-7.5A5.25 5.25 0 0 1 8.25 3M8 7v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fom-n-bna"/><path class="bc-k4mbll"/></g>`,
		"fallback": "uix:goal-tile-15",
	});
}

export default Component;
