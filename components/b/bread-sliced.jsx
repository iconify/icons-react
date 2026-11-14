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
		"content": `<style>.rd41eljoe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19.5v-7C3.25 12 2.75 11 2.75 9.75C2.75 7.25 6 5.5 12 5.5s9.25 1.75 9.25 4.25c0 1.25-.5 2.25-1.75 2.75v7ZM9 11h.01M15 11h.01M12 14.5h.01");
}
</style><path class="rd41eljoe"/>`,
		"fallback": "uix:bread-sliced",
	});
}

export default Component;
