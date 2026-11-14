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
		"content": `<style>.jkz4lfbqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.625 2.5h.75A2.625 2.625 0 0 1 11 5.125v13.75A2.625 2.625 0 0 1 8.375 21.5h-.75A2.625 2.625 0 0 1 5 18.875V5.125A2.625 2.625 0 0 1 7.625 2.5M11 7H8m3 5H7m4 5H8m9-14v18M14.75 5.25L17 3l2.25 2.25m-4.5 13.5L17 21l2.25-2.25");
}
</style><path class="jkz4lfbqz"/>`,
		"fallback": "uix:height-measurement",
	});
}

export default Component;
