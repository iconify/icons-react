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
		"content": `<style>.twk6xdbin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19M12 8Q8.5 8 8.5 4.5Q12 4.5 12 8m0 4.5q-3.5 0-3.5-3.5Q12 9 12 12.5m0 4.5q-3.5 0-3.5-3.5q3.5 0 3.5 3.5m0-9q3.5 0 3.5-3.5Q12 4.5 12 8m0 4.5q3.5 0 3.5-3.5Q12 9 12 12.5m0 4.5q3.5 0 3.5-3.5q-3.5 0-3.5 3.5");
}
</style><path class="twk6xdbin"/>`,
		"fallback": "uix:fiber-intake",
	});
}

export default Component;
