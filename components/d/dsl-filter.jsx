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
		"content": `<style>.mo-79obyw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5h10v9H7ZM2.5 12H7m10 0h4.5M12 7.5v9");
}
</style><path class="mo-79obyw"/>`,
		"fallback": "uix-sharp:dsl-filter",
	});
}

export default Component;
