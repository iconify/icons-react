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
		"content": `<style>.vlqqcblzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 18.5l9.5-13m-10.25 2a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm6.5 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM18.5 21V4m-3 3l3-3l3 3");
}
</style><path class="vlqqcblzc"/>`,
		"fallback": "uix-sharp:deposit-high-yield",
	});
}

export default Component;
