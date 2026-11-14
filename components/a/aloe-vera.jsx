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
		"content": `<style>.spl6v7j8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.5c-1.5-5.5-1-12 0-17c1 5 1.5 11.5 0 17Zm-1 0c-3-2-5.5-7-7-12c3 2.5 6 6.5 7 12Zm2 0c3-2 5.5-7 7-12c-3 2.5-6 6.5-7 12Z");
}
</style><path class="spl6v7j8o"/>`,
		"fallback": "uix-sharp:aloe-vera",
	});
}

export default Component;
