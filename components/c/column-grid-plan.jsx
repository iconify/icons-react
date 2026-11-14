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
		"content": `<style>.em6rsdowp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5h15M4.5 12h15m-15 7.5h15m-15-15v15m7.5-15v15m7.5-15v15M3.25 3.25h2.5v2.5h-2.5Zm7.5 0h2.5v2.5h-2.5Zm7.5 0h2.5v2.5h-2.5Zm-15 7.5h2.5v2.5h-2.5Zm7.5 0h2.5v2.5h-2.5Zm7.5 0h2.5v2.5h-2.5Zm-15 7.5h2.5v2.5h-2.5Zm7.5 0h2.5v2.5h-2.5Zm7.5 0h2.5v2.5h-2.5Z");
}
</style><path class="em6rsdowp"/>`,
		"fallback": "uix-sharp:column-grid-plan",
	});
}

export default Component;
