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
		"content": `<style>.i6syj6bft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12a7 7 0 0 1 14 0M2.75 12h18.5l-1.4 6.6a3.4 3.4 0 0 1-3.3 2.65h-9.1a3.4 3.4 0 0 1-3.3-2.65Zm5 4.5h8.5");
}
</style><path class="i6syj6bft"/>`,
		"fallback": "iconoven:child-car-seat",
	});
}

export default Component;
