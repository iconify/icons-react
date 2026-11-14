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
		"content": `<style>.uehmrac5u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3h10.5A1.75 1.75 0 0 1 19 4.75v6.5A1.75 1.75 0 0 1 17.25 13H6.75A1.75 1.75 0 0 1 5 11.25v-6.5A1.75 1.75 0 0 1 6.75 3M9 13l-4 8.5M15 13l4 8.5M12 13v6.5");
}
</style><path class="uehmrac5u"/>`,
		"fallback": "uix:field-easel",
	});
}

export default Component;
