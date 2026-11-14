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
		"content": `<style>.lzeq94b7l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5h17m-9.5 5h9.5m-9.5 5h9.5m-17 5h17M5.75 10.25l.728.566a1.5 1.5 0 0 1 0 2.368l-.728.566a1.394 1.394 0 0 1-2.25-1.1v-1.3a1.394 1.394 0 0 1 2.25-1.1");
}
</style><path class="lzeq94b7l"/>`,
		"fallback": "uix:indent",
	});
}

export default Component;
