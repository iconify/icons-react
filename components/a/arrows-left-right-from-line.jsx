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
		"content": `<style>.wj23b3b6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12H2.75m3-3l-3 3l3 3M15 12h6.25m-3-3l3 3l-3 3M12 4v16");
}
</style><path class="wj23b3b6r"/>`,
		"fallback": "uix-sharp:arrows-left-right-from-line",
	});
}

export default Component;
