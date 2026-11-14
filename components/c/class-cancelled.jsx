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
		"content": `<style>.apx2vccgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.4 4.5h12.1v12.1M17.1 21H3.5V7.4m6-4.9v3.1m5-3.1V6m-11 3.5h2.1m7.8 0h7.1m-17-6l17 17");
}
</style><path class="apx2vccgu"/>`,
		"fallback": "uix-sharp:class-cancelled",
	});
}

export default Component;
