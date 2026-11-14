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

.mi51p1bku {
  d: path("M4.5 15.5a6.5 4.5 0 1 0 13 0a6.5 4.5 0 1 0-13 0");
}

.v48x_4kmh {
  d: path("M9.5 11C7 7.5 8 4 11 4s3.5 3.5 2 7.25m4.5 4.25h2M9.5 11v9m3.5-8.75v8.5");
}
</style><g class="hntgybcog"><path class="mi51p1bku"/><path class="v48x_4kmh"/></g>`,
		"fallback": "uix:cause-bees",
	});
}

export default Component;
