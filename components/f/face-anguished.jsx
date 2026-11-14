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

.hsd7j-hll {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m5-4.75L10 6m6.5 1.25L14 6");
}

.jre15ccus {
  d: path("m8.868 10.309l.132.066a.699.699 0 0 1 0 1.25l-.132.066A.773.773 0 0 1 7.75 11a.773.773 0 0 1 1.118-.691m6.264 0l-.132.066a.699.699 0 0 0 0 1.25l.132.066A.773.773 0 0 0 16.25 11a.773.773 0 0 0-1.118-.691M8.5 16.75q1.75-1.75 3.5 0t3.5 0");
}
</style><g class="hntgybcog"><path class="hsd7j-hll"/><path class="jre15ccus"/></g>`,
		"fallback": "uix:face-anguished",
	});
}

export default Component;
