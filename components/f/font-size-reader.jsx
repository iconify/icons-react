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
		"content": `<style>.v39t6zbsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20L7.75 4L13 20m-8.75-5.5h7M16 20l2.75-8l2.75 8m-4.75-2.5h4");
}
</style><path class="v39t6zbsj"/>`,
		"fallback": "uix:font-size-reader",
	});
}

export default Component;
