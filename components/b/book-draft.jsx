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
		"content": `<style>.lgu1bmf1d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5H16A3.5 3.5 0 0 1 19.5 6v12a3.5 3.5 0 0 1-3.5 3.5H9.5A3.5 3.5 0 0 1 6 18V6a3.5 3.5 0 0 1 3.5-3.5M4 8h4m-4 8h4m3-8h5m-5 4h3");
}
</style><path class="lgu1bmf1d"/>`,
		"fallback": "uix:book-draft",
	});
}

export default Component;
