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

.uflifulza {
  d: path("M5.5 10.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0M3 21l4.75-4.75");
}

.xp1_wt6oq {
  d: path("M4.25 16.25h3.5v3.5M13.5 6v4.5l3 2");
}
</style><g class="hntgybcog"><path class="uflifulza"/><path class="xp1_wt6oq"/></g>`,
		"fallback": "uix:guest-arrival-time",
	});
}

export default Component;
