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
		"content": `<style>.zhgpszbge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 4.5a2.75 2.75 0 0 1 4 4l-6 6a2.75 2.75 0 0 1-4-4Zm7 5a2.75 2.75 0 0 1 4 4l-6 6a2.75 2.75 0 0 1-4-4Zm-10-2l4 4m3 1l4 4");
}
</style><path class="zhgpszbge"/>`,
		"fallback": "uix:capsule-two",
	});
}

export default Component;
