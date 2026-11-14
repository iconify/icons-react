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
		"content": `<style>.raz2bl06u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h19c0 6-4.5 10-9.5 10S2.5 15 2.5 9Zm.75-4h4v4h-4ZM10 5h4v4h-4Zm6.75 0h4v4h-4Z");
}
</style><path class="raz2bl06u"/>`,
		"fallback": "uix-sharp:cereal-bowl",
	});
}

export default Component;
