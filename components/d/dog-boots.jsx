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
		"content": `<style>.rhlf90afe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h4.75V12c3 .5 3.5 3 3.5 5.5v3H2.5Zm11 0h4.75V12c3 .5 3.5 3 3.5 5.5v3H13.5ZM2.5 7h4.75m6.25 0h4.75m-12 9.75h.01m10.99 0h.01");
}
</style><path class="rhlf90afe"/>`,
		"fallback": "uix:dog-boots",
	});
}

export default Component;
