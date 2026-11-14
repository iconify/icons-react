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
		"content": `<style>.d2f8w9bix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.988 9.845l-1.566.329m-3.249 4.862l.164.986m4.708 3.552l1.393-.146m3.452-4.498l-.282-1.879m2.223-6.882L16.5 5.5l.052-.013M2.25 11a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m9.5-2a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m1.5 10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m-9.5 1a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m15.5-15.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="d2f8w9bix"/>`,
		"fallback": "uix:constellation-pegasus",
	});
}

export default Component;
