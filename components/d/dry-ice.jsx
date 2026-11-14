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

.mr_q70s6y {
  d: path("m12 10l5.5 3v5.5l-5.5 3l-5.5-3V13Z");
}

.yzjjsznxg {
  d: path("m6.5 13l5.5 3l5.5-3M12 16v5.5M7 7.25Q5.5 6 7 4.75t0-2.5m5 5Q10.5 6 12 4.75t0-2.5m5 5Q15.5 6 17 4.75t0-2.5");
}
</style><g class="hntgybcog"><path class="mr_q70s6y"/><path class="yzjjsznxg"/></g>`,
		"fallback": "uix:dry-ice",
	});
}

export default Component;
