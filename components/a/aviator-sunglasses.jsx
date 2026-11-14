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
		"content": `<style>.r37_zuhti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h7.25c.25 3.5-.75 6.75-3.25 6.75S2.75 13 3 9m18 0h-7.25c-.25 3.5.75 6.75 3.25 6.75S21.25 13 21 9M10.25 9h3.5m-9 3.5L7 10.25m12.25 2.25L17 10.25");
}
</style><path class="r37_zuhti"/>`,
		"fallback": "uix:aviator-sunglasses",
	});
}

export default Component;
