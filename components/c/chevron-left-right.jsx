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
		"content": `<style>.t12c18b3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 7.5L19 12l-4.5 4.5m-5-9L5 12l4.5 4.5");
}
</style><path class="t12c18b3l"/>`,
		"fallback": "uix:chevron-left-right",
	});
}

export default Component;
