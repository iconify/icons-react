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
		"content": `<style>.wqil0bc7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4v12m17-12v12M3.5 6h17m-17 8h17M12 6l2 4.25M7 18.5h10m-2.25-2.25L17 18.5l-2.25 2.25");
}
</style><path class="wqil0bc7i"/>`,
		"fallback": "uix-sharp:check-valve",
	});
}

export default Component;
