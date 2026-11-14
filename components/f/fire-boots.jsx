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
		"content": `<style>.jkh6469up {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.5H9a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 9 6H6.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 6.5 2.5M10 6v15H4a1.5 1.5 0 0 1-1.5-1.5V19a3 3 0 0 1 3-3V6M15 2.5h2.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 17.5 6H15a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 15 2.5M14 6v15h6a1.5 1.5 0 0 0 1.5-1.5V19a3 3 0 0 0-3-3V6");
}
</style><path class="jkh6469up"/>`,
		"fallback": "uix:fire-boots",
	});
}

export default Component;
