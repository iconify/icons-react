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
		"content": `<style>.qj3qdfbko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 16.5h13.5A2.25 2.25 0 0 1 21 18.75A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75a2.25 2.25 0 0 1 2.25-2.25M12 2.5q4 3.5 3.5 6Q15 10 12 10T8.5 8.5Q8 6 12 2.5m-6 14L18 13M6 13l12 3.5");
}
</style><path class="qj3qdfbko"/>`,
		"fallback": "uix:fire-pit-outdoor",
	});
}

export default Component;
