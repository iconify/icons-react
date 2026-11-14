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
		"content": `<style>.qv32mrbpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5v19M6 4c3-1.5 5.5 1.5 12 0v8c-6.5 1.5-9-1.5-12 0");
}
</style><path class="qv32mrbpv"/>`,
		"fallback": "uix-sharp:golf-flag",
	});
}

export default Component;
