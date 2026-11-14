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
		"content": `<style>.tnur1wmkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h15v11h-15ZM10 9v11m9.5-16.5Q19.5 6 22 6q-2.5 0-2.5 2.5Q19.5 6 17 6q2.5 0 2.5-2.5Z");
}
</style><path class="tnur1wmkx"/>`,
		"fallback": "uix-sharp:dishwasher-tablet",
	});
}

export default Component;
