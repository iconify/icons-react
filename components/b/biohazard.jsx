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
		"content": `<style>.byy9a_b-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 4.25a3.75 3.75 0 1 1-6 0a3 3 0 0 0 6 0Zm2.75 15a3.75 3.75 0 1 1 3-5.25a3 3 0 0 0-3 5.25ZM3.25 14a3.75 3.75 0 1 1 3 5.25a3 3 0 0 0-3-5.25Zm7.5-1.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}
</style><path class="byy9a_b-e"/>`,
		"fallback": "uix-sharp:biohazard",
	});
}

export default Component;
