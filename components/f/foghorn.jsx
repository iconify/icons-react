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
		"content": `<style>.u-fayx_yn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8.5H8l6-4v11l-6-4H3.5Zm2.5 3v8m-2.5 0h5m8.25-12.25a4 4 0 0 1 0 5.5M19 5a7 7 0 0 1 0 10");
}
</style><path class="u-fayx_yn"/>`,
		"fallback": "uix:foghorn",
	});
}

export default Component;
