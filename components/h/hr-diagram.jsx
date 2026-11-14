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
		"content": `<style>.dcoj2ggha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v17.5H21M7.5 6.5h.01m2.49 3h.01m2.99 1h.01M14.5 14h.01M18 15.5h.01");
}
</style><path class="dcoj2ggha"/>`,
		"fallback": "uix:hr-diagram",
	});
}

export default Component;
