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
		"content": `<style>.qp1n89b-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9.5a8.5 6 0 0 1 17 0Zm0 0h17a8.5 6.5 0 0 1-17 0ZM7 14.75L5.5 21.5M17 14.75l1.5 6.75M12 16v5.5m-1.5-15h3");
}
</style><path class="qp1n89b-s"/>`,
		"fallback": "uix-sharp:backyard",
	});
}

export default Component;
