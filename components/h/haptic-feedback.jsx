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
		"content": `<style>.ci-ookbru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3za3 3 0 0 1 3 3v12a3 3 0 0 1-3 3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3M6.25 9.5q-1.5 2.5 0 5M3.5 8q-2 4 0 8m14.25-6.5q1.5 2.5 0 5M20.5 8q2 4 0 8");
}
</style><path class="ci-ookbru"/>`,
		"fallback": "uix:haptic-feedback",
	});
}

export default Component;
