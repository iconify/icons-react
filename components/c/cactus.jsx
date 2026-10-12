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
		"content": `<style>.a4p1-gbti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 21.25v-16a2.5 2.5 0 0 1 5 0v16Zm0-6.5h-2a2.25 2.25 0 0 1-2.25-2.25V9m9.25 3h2a2.25 2.25 0 0 0 2.25-2.25V7m-12 14.25h10.5");
}
</style><path class="a4p1-gbti"/>`,
		"fallback": "iconoven:cactus",
	});
}

export default Component;
