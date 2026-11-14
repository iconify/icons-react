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
		"content": `<style>.zebbl5_0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14V5.5H5V14m-2.5 0h19M7.25 14V8a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 .5.5v6m2 0V8a.5.5 0 0 1 .5-.5h2.25a.5.5 0 0 1 .5.5v6m2 0V8a.5.5 0 0 1 .5-.5h2.25a.5.5 0 0 1 .5.5v6M2.75 16.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5.25 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5.25 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><path class="zebbl5_0r"/>`,
		"fallback": "uix:baggage-train",
	});
}

export default Component;
