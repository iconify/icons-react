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
		"content": `<style>.diyq3qh5p {
  d: path("m9 9.25l3 6.5l3-6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wo_f40b6x {
  d: path("M6.6 4.5h10.8a1 1 0 0 1 .8.4l2.65 3.55a1 1 0 0 1-.05 1.28l-8.05 9.12a1 1 0 0 1-1.5 0L3.2 9.73a1 1 0 0 1-.05-1.28L5.8 4.9a1 1 0 0 1 .8-.4M3.25 9.25h17.5");
}
</style><g class="hntgybcog"><path class="wo_f40b6x"/><path class="diyq3qh5p"/></g>`,
		"fallback": "iconoven:diamond",
	});
}

export default Component;
