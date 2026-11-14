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
		"content": `<style>.wc5os3cwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18M6 15h3a1.5 1.5 0 0 1 1.5 1.5V19A1.5 1.5 0 0 1 9 20.5H6A1.5 1.5 0 0 1 4.5 19v-2.5A1.5 1.5 0 0 1 6 15m6.5 0h3a1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 11 19v-2.5a1.5 1.5 0 0 1 1.5-1.5M9 9.5h3a1.5 1.5 0 0 1 1.5 1.5v2.5A1.5 1.5 0 0 1 12 15H9a1.5 1.5 0 0 1-1.5-1.5V11A1.5 1.5 0 0 1 9 9.5m8-5V12h3");
}
</style><path class="wc5os3cwe"/>`,
		"fallback": "uix:container-terminal",
	});
}

export default Component;
