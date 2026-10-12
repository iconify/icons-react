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
		"content": `<style>.sapinedss {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.5h18c0 2.25-3.75 3.5-8.5 3.5s-7.5-1.25-8-2.75Zm2 6.5h14.5M7 18l-1.5 3.25M17 18l1.5 3.25M9.5 8.5c-.9-1.2.9-2.2 0-3.75m5 3.75c-.9-1.2.9-2.2 0-3.75");
}
</style><path class="sapinedss"/>`,
		"fallback": "iconoven:evaporating-dish",
	});
}

export default Component;
