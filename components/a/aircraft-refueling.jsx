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
		"content": `<style>.dyvxrjb8t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 10.5c0 1-1.25 1.5-2.5 1.5h-5l-4.5 6.5h-2L10 12H6l-2 2.5H2.5l1-4l-1-4H4L6 9h4L7.5 2.5h2L14 9h5c1.25 0 2.5.5 2.5 1.5m-2.75 4.25c1 1.5 2.75 2.75 2.75 4a2.75 2.75 0 0 1-5.5 0c0-1.25 1.75-2.5 2.75-4");
}
</style><path class="dyvxrjb8t"/>`,
		"fallback": "uix:aircraft-refueling",
	});
}

export default Component;
