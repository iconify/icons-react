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
		"content": `<style>.mm-9qfict {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 2.5h5V7h-5ZM4 17l13.5-8.5m-8 5V21M6 21h7M2.5 15.5h3v4h-3Z");
}
</style><path class="mm-9qfict"/>`,
		"fallback": "uix-sharp:camera-crane",
	});
}

export default Component;
