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
		"content": `<style>.fg5liwgya {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 2.75h2.5Q9.5 2.75 9.5 4v11.25q0 1.25 1.25 1.25H20q1.25 0 1.25 1.25V20q0 1.25-1.25 1.25H5.75Q4.5 21.25 4.5 20V4q0-1.25 1.25-1.25M7 5.25v9");
}
</style><path class="fg5liwgya"/>`,
		"fallback": "iconoven:allen-key",
	});
}

export default Component;
