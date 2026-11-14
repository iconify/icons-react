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
		"content": `<style>.aelxigb2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5c0-3 1.75-4.75 4-4.75s4 1.75 4 4.75Zm11 0c0-3 1.75-4.75 4-4.75s4 1.75 4 4.75ZM4 10.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m11 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M6.5 5c2-3 9-3 11 0m-2.5.25L17.5 5l.5-2.5M9 5.25L6.5 5L6 2.5");
}
</style><path class="aelxigb2i"/>`,
		"fallback": "uix:crew-change",
	});
}

export default Component;
