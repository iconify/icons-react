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
		"content": `<style>.kejvsvbch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM7 8.5h.01m4.99 0h.01m4.99 0h.01M7 12h.01M12 12h.01M17 12h.01M7 15.5h.01m4.99 0h.01m4.99 0h.01");
}
</style><path class="kejvsvbch"/>`,
		"fallback": "uix-sharp:grid-controller",
	});
}

export default Component;
