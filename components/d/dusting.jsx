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
		"content": `<style>.e4tb2cc5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 14v7.5M9.5 14l-3-7.5a2.25 2.25 0 0 1 3.75-2a2 2 0 0 1 3.5 0a2.25 2.25 0 0 1 3.75 2l-3 7.5ZM12 7.5V11");
}
</style><path class="e4tb2cc5c"/>`,
		"fallback": "uix-sharp:dusting",
	});
}

export default Component;
