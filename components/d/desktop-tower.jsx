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
		"content": `<style>.lvu6m3bbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5h5A3.5 3.5 0 0 1 18 6v12a3.5 3.5 0 0 1-3.5 3.5h-5A3.5 3.5 0 0 1 6 18V6a3.5 3.5 0 0 1 3.5-3.5m-.5 4h6M9 10h6m-3 7h.01");
}
</style><path class="lvu6m3bbh"/>`,
		"fallback": "uix:desktop-tower",
	});
}

export default Component;
