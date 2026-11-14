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
		"content": `<style>.ymlr2ab0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h7M8 2.5v8l5 5.25m6.75.25L18 13l-9.75 5.5l1.75 3Z");
}
</style><path class="ymlr2ab0j"/>`,
		"fallback": "uix-sharp:brake-pedal",
	});
}

export default Component;
