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
		"content": `<style>.rm67babmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5h19m-9.5 0L8.5 18h7Zm-8-5h4.5v5H4Zm11.5 0H20v5h-4.5Z");
}
</style><path class="rm67babmj"/>`,
		"fallback": "uix-sharp:balance-beam-physics",
	});
}

export default Component;
