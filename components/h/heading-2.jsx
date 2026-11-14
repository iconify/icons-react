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
		"content": `<style>.k213i0zda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5v14m8-14v14m-8-7h8m4.25-.5c0-1.5 1-2.5 2.25-2.5s2.25 1 2.25 2.5c0 2.75-4.5 4-4.5 7.5h4.75");
}
</style><path class="k213i0zda"/>`,
		"fallback": "uix:heading-2",
	});
}

export default Component;
