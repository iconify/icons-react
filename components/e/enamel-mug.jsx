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
		"content": `<style>.cbfz7ccen {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4.5V17a2.5 2.5 0 0 0 2.5 2.5H14a2.5 2.5 0 0 0 2.5-2.5V4.5M3 4.5h14.5m-1 3.5H18a2.5 2.5 0 0 1 2.5 2.5V12a2.5 2.5 0 0 1-2.5 2.5h-1.5");
}
</style><path class="cbfz7ccen"/>`,
		"fallback": "uix:enamel-mug",
	});
}

export default Component;
