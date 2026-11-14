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
		"content": `<style>.rud0jxblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14q9-9 18 0q-9 9-18 0m9-4.5V4m-4.5 6.5L5 6m11.5 4.5L19 6m-7 8h.01");
}
</style><path class="rud0jxblu"/>`,
		"fallback": "uix:eyelashes",
	});
}

export default Component;
