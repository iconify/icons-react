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
		"content": `<style>.i9m6sm1jo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 19.25l2.5-.75l9.5-9.5l3.25.5m2.75-3L18 9.5l3 1.75");
}
</style><path class="i9m6sm1jo"/>`,
		"fallback": "iconoven:crowbar",
	});
}

export default Component;
