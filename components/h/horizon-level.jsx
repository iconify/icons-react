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
		"content": `<style>.bj43rriav {
  d: path("M9.75 10.25h4.5A1.75 1.75 0 0 1 16 12a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 12a1.75 1.75 0 0 1 1.75-1.75M12 12h.01");
}

.g3uw11bre {
  d: path("M4.25 7.5h15.5a1.75 1.75 0 0 1 1.75 1.75v5.5a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-5.5A1.75 1.75 0 0 1 4.25 7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g3uw11bre"/><path class="bj43rriav"/></g>`,
		"fallback": "uix:horizon-level",
	});
}

export default Component;
