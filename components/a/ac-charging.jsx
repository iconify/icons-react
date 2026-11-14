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
		"content": `<style>.hh05g15kz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 6.5h10v4a5 5 0 0 1-10 0Zm2.5-4v4m5-4v4m-10 13q1.875-3 3.75 0t3.75 0t3.75 0t3.75 0");
}
</style><path class="hh05g15kz"/>`,
		"fallback": "uix:ac-charging",
	});
}

export default Component;
