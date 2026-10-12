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

.j7p69yblv {
  d: path("m3.75 7.25l8.25 4.5l8.25-4.5M12 11.75v9.5m-6-4l1.9-4.75l1.85 5.75m-3-2.75h2.5");
}

.jttk_hb_x {
  d: path("m13.1 3.35l6.05 3.3q1.1.6 1.1 1.85v7q0 1.25-1.1 1.85l-6.05 3.3q-1.1.6-2.2 0l-6.05-3.3q-1.1-.6-1.1-1.85v-7q0-1.25 1.1-1.85l6.05-3.3q1.1-.6 2.2 0");
}
</style><g class="hntgybcog"><path class="jttk_hb_x"/><path class="j7p69yblv"/></g>`,
		"fallback": "iconoven:baby-blocks",
	});
}

export default Component;
