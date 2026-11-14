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

.q7cxk0y8g {
  d: path("M7 21.5v-19M7 18c0-5 1.5-7 4-9.5L16.5 3");
}

.rs768sbdo {
  d: path("M12 3h4.5v4.5");
}
</style><g class="hntgybcog"><path class="q7cxk0y8g"/><path class="rs768sbdo"/></g>`,
		"fallback": "uix:exit-ramp-right",
	});
}

export default Component;
