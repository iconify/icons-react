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
		"content": `<style>.vknpc0byd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7h9v10H8Zm9 3.5h4v3h-4ZM2.5 12H8");
}
</style><path class="vknpc0byd"/>`,
		"fallback": "uix-sharp:fiber-connector-sc",
	});
}

export default Component;
