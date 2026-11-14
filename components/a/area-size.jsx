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
		"content": `<style>.xymb6nbne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 9.25H13A1.75 1.75 0 0 1 14.75 11v8.75A1.75 1.75 0 0 1 13 21.5H4.25a1.75 1.75 0 0 1-1.75-1.75V11a1.75 1.75 0 0 1 1.75-1.75m13.25-4.5a2 2 0 0 1 4 0C21.5 6 20.25 7 17.5 9h4.25");
}
</style><path class="xymb6nbne"/>`,
		"fallback": "uix:area-size",
	});
}

export default Component;
