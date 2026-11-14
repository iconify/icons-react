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
		"content": `<style>.yzxjk9qxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9H13v12H3.5ZM6 6.5h4.5V9H6Zm2.25 0V4m-2 0h7.5v1.5m2 15c0-2.5 1.75-3 3-5c1.25 2 3 2.5 3 5Z");
}
</style><path class="yzxjk9qxt"/>`,
		"fallback": "uix-sharp:baby-lotion",
	});
}

export default Component;
