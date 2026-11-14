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
		"content": `<style>.fxuoz2bzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5h15v3h-15Zm2.5 3v11m-2.5 0h15v3h-15Z");
}
</style><path class="fxuoz2bzv"/>`,
		"fallback": "uix-sharp:c-table",
	});
}

export default Component;
