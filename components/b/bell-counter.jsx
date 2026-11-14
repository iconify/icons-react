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
		"content": `<style>.h3csr5tst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15a8 8 0 0 1 16 0Zm-1.5 0h19M12 7V4.5m-2 0h4");
}
</style><path class="h3csr5tst"/>`,
		"fallback": "uix-sharp:bell-counter",
	});
}

export default Component;
