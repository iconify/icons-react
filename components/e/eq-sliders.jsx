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
		"content": `<style>.rvendlbcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3v18m6-18v18m6-18v18M4 13h4v3.5H4Zm6-7h4v3.5h-4Zm6 4h4v3.5h-4Z");
}
</style><path class="rvendlbcz"/>`,
		"fallback": "uix-sharp:eq-sliders",
	});
}

export default Component;
