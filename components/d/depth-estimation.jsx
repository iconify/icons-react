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
		"content": `<style>.opztudbxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v18H3Zm6 6h6v6H9ZM3 3l6 6m12-6l-6 6M3 21l6-6m12 6l-6-6");
}
</style><path class="opztudbxb"/>`,
		"fallback": "uix:depth-estimation",
	});
}

export default Component;
