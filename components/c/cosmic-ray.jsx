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
		"content": `<style>.d6_bzqp5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14A7.25 7.25 0 0 1 10 21.25H2.75ZM21 3L10.5 13.5m4 0h-4v-4m-5.9 2.6l.35-1.95m8 7.95l1.8-.8");
}
</style><path class="d6_bzqp5x"/>`,
		"fallback": "iconoven:cosmic-ray",
	});
}

export default Component;
