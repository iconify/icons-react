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
		"content": `<style>.qo25fgbhx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v7.5H3Zm11.4 18H3v-7.5h7.1M6.5 6.75h.01m-.01 10.5h.01M14.75 15h6.75L19 18.25v3.25l-1.75-1v-2.25Z");
}
</style><path class="qo25fgbhx"/>`,
		"fallback": "uix-sharp:dns-filter",
	});
}

export default Component;
