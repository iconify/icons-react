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
		"content": `<style>.rs2cbeg4r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 6.5h11v10h-11ZM8 3v3.5M12 3v3.5m-2 10V18c0 3.5 4 3.5 7 3.5h4");
}
</style><path class="rs2cbeg4r"/>`,
		"fallback": "uix-sharp:category-cables-chargers",
	});
}

export default Component;
