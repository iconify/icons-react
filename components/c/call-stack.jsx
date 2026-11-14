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
		"content": `<style>.ow_fez-5h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h16V7h-16ZM4 9.75h16v4.5H4ZM5.5 17h16v4.5h-16Z");
}
</style><path class="ow_fez-5h"/>`,
		"fallback": "uix-sharp:call-stack",
	});
}

export default Component;
