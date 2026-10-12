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
		"content": `<style>.bflokibyi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 19.25L19 5m-4.25-.25h4.5v4.5m0 10L5 5m-.25 4.25v-4.5h4.5");
}
</style><path class="bflokibyi"/>`,
		"fallback": "iconoven:arrow-cross",
	});
}

export default Component;
