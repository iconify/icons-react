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
		"content": `<style>.s5ir4yh-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7h12a3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 18 17H6a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 6 7m.5 5H9m2 0h2m2 0h2.5");
}
</style><path class="s5ir4yh-a"/>`,
		"fallback": "uix:car-registration",
	});
}

export default Component;
