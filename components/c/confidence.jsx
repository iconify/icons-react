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
		"content": `<style>.o_w0nxf6f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h14A3.5 3.5 0 0 0 20 17V4.5a2 2 0 0 0-2-2h-3.5a2 2 0 0 0-2 2V6a2 2 0 0 0 2 2h1.25v5.5C14 9.25 7 8.75 5.25 13.25c-.5 1-1.75 1.75-2.75 2.25Zm10-15.25h3");
}
</style><path class="o_w0nxf6f"/>`,
		"fallback": "uix:confidence",
	});
}

export default Component;
