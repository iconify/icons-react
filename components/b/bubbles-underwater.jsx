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
		"content": `<style>.aaynlftow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm10.5-6a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-5.75-5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="aaynlftow"/>`,
		"fallback": "uix-sharp:bubbles-underwater",
	});
}

export default Component;
