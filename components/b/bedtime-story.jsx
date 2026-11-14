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
		"content": `<style>.ax1k176-w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21c-2-1.25-5.5-1.75-9.5-1.25V12.5c4-.5 7.5 0 9.5 1.5c2-1.5 5.5-2 9.5-1.5v7.25c-4-.5-7.5 0-9.5 1.25m0-7v7m1.75-18a3.5 3.5 0 1 0 1.75 5.25A3.25 3.25 0 0 1 13.75 3");
}
</style><path class="ax1k176-w"/>`,
		"fallback": "uix:bedtime-story",
	});
}

export default Component;
