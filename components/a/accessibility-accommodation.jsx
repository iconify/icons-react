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
		"content": `<style>.ctc7q7b0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21v-1l10-7h9v8Zm10-8v8m-10-7l10-7M5 12.25v2.5m5-6v2.5");
}
</style><path class="ctc7q7b0m"/>`,
		"fallback": "uix-sharp:accessibility-accommodation",
	});
}

export default Component;
