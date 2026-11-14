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
		"content": `<style>.evc368lde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h8.5M6.5 9h11M10 14.5h4.5m-.25 6.75l.5-2.75L19 14.25a1.5 1.5 0 0 1 2.25 2.25L17 20.75Z");
}
</style><path class="evc368lde"/>`,
		"fallback": "uix:gantt-edit",
	});
}

export default Component;
