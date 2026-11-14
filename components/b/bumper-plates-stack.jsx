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
		"content": `<style>.b-rw5vist {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 7h13.5A2.25 2.25 0 0 1 21 9.25a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 9.25A2.25 2.25 0 0 1 5.25 7m0 4.5h13.5A2.25 2.25 0 0 1 21 13.75A2.25 2.25 0 0 1 18.75 16H5.25A2.25 2.25 0 0 1 3 13.75a2.25 2.25 0 0 1 2.25-2.25m0 4.5h13.5A2.25 2.25 0 0 1 21 18.25a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18.25A2.25 2.25 0 0 1 5.25 16M12 2.5V7");
}
</style><path class="b-rw5vist"/>`,
		"fallback": "uix:bumper-plates-stack",
	});
}

export default Component;
