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
		"content": `<style>.uac-g-ovz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 18.5l5-13.75l5 13.75m-8.15-5h6.3m3.35 1.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m6.5-3.75v7.25m-18 2.75h18.5");
}
</style><path class="uac-g-ovz"/>`,
		"fallback": "iconoven:dyslexia-font",
	});
}

export default Component;
