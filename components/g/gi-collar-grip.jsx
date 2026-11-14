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
		"content": `<style>.tn1qywuyw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V10c0-3 2-5 5.5-6.5m13.5 18V10c0-3-2-5-5.5-6.5m-8 0l3 7.5m5-7.5L13 11m-4 0h6v5.5H9Zm1.5 5.5v5m3-5v5");
}
</style><path class="tn1qywuyw"/>`,
		"fallback": "uix-sharp:gi-collar-grip",
	});
}

export default Component;
