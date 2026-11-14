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
		"content": `<style>.c0d294blx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.7 18H2.5V6h19v9.2M6 9.5v5m12 0v7M14.5 18h7");
}
</style><path class="c0d294blx"/>`,
		"fallback": "uix-sharp:field-add",
	});
}

export default Component;
