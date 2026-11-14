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
		"content": `<style>.yc9ew496x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 17h12.5A1.75 1.75 0 0 1 20 18.75a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 18.75A1.75 1.75 0 0 1 5.75 17M12 17V3M9 17Q8.5 9 6.5 4M15 17q.5-8 2.5-13M6 17q-1-5-3.5-8.5M18 17q1-5 3.5-8.5");
}
</style><path class="yc9ew496x"/>`,
		"fallback": "uix:carnival-costume-feathers",
	});
}

export default Component;
