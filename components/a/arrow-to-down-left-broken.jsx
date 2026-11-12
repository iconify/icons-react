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
		"content": `<style>.knoj3nbcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 14.5L12 19.5L17 14.5M12 19.5L12 13M12 9.5C12 7.83333 11 4.5 7 4.5");
}
</style><path class="knoj3nbcc"/>`,
		"fallback": "solar:arrow-to-down-left-broken",
	});
}

export default Component;
