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
		"content": `<style>.ktopf6kia {
  d: path("M4.5 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.25 11c-1.5-1.5-2.75-2.75-2.75-3.25a2.75 2.75 0 0 1 5.5 0c0 .5-1.25 1.75-2.75 3.25Z");
}

.mba7c104x {
  d: path("M4.5 11h-1q-1 0-1-1V7.5l3-1.25L8 3h7l2.75 3.25l1.75.5q1 .25 1 1.25v2q0 1-1 1h-3m-8 0h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mba7c104x"/><path class="ktopf6kia"/></g>`,
		"fallback": "uix-sharp:car-tracker",
	});
}

export default Component;
