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
		"content": `<style>.obqxe0b8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19m0-17c5.5 2 5.5 6 0 8c-5.5-2-5.5-6 0-8M5 18a7 2.5 0 1 0 14 0a7 2.5 0 1 0-14 0");
}
</style><path class="obqxe0b8i"/>`,
		"fallback": "uix:drop-spindle",
	});
}

export default Component;
