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
		"content": `<style>.gbd5_xqyi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 21v-9c0-3 3-3.5 4.5-5.5c.75-1 1.5-2.25 1.5-3.5c0 1.25.75 2.5 1.5 3.5C15 8.5 18 9 18 12v9M3 21h18");
}
</style><path class="gbd5_xqyi"/>`,
		"fallback": "uix:arch-ogee",
	});
}

export default Component;
