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
		"content": `<style>.hcgjnzlft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19.5h18M12 16v3.5M6.5 16a5.5 5.5 0 0 1 11 0Zm12-7l2-2m-15 2l-2-2");
}
</style><path class="hcgjnzlft"/>`,
		"fallback": "uix-sharp:bike-bell",
	});
}

export default Component;
