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
		"content": `<style>.b8hc43bvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h4V7h-4Zm13 0h4V7h-4ZM5.5 7v1c0 3 6.5 2.5 6.5 6v2.5M18.5 7v1c0 3-6.5 2.5-6.5 6m-2 2.5h4v5h-4Z");
}
</style><path class="b8hc43bvo"/>`,
		"fallback": "uix-sharp:cable-split",
	});
}

export default Component;
