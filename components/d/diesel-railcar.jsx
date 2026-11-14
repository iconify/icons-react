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
		"content": `<style>.f365p7wfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6.5h7v9H2.5V8A1.5 1.5 0 0 1 4 6.5m9 0h7A1.5 1.5 0 0 1 21.5 8v7.5H13Zm-7.5 0v-3H8v3m3 6h2m-8 5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m10.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M5.25 10.25h3m7.5 0h3");
}
</style><path class="f365p7wfk"/>`,
		"fallback": "uix:diesel-railcar",
	});
}

export default Component;
