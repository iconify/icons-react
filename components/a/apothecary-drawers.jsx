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
		"content": `<style>.tc2gerbln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.625 2.5h8.75A2.625 2.625 0 0 1 19 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 5 18.875V5.125A2.625 2.625 0 0 1 7.625 2.5M5 8.75h14m-14 6.5h14M12 2.5v19M8.5 5.75h.01m6.99 0h.01M8.5 12h.01m6.99 0h.01M8.5 18.5h.01m6.99 0h.01");
}
</style><path class="tc2gerbln"/>`,
		"fallback": "uix:apothecary-drawers",
	});
}

export default Component;
