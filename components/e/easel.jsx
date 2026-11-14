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
		"content": `<style>.m4vko7bnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 6h14v9H5Zm7-3.5V6m-3.5 9L6 21.5m9.5-6.5l2.5 6.5M12 15v6.5");
}
</style><path class="m4vko7bnp"/>`,
		"fallback": "uix-sharp:easel",
	});
}

export default Component;
