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
		"content": `<style>.w9aoqjbyq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 2V22M14 2V22M18 8H16C14.8954 8 14 8.895 14 10V14C14 15.105 14.8954 16 16 16H18C19.1046 16 20 15.105 20 14V10C20 8.895 19.1046 8 18 8ZM4 6V18C4 19.105 4.8954 20 6 20H8C9.1046 20 10 19.105 10 18V6C10 4.895 9.1046 4 8 4H6C4.8954 4 4 4.895 4 6Z");
}
</style><path class="w9aoqjbyq"/>`,
		"fallback": "keyline-icons:align-horizontal-distribute-start",
	});
}

export default Component;
