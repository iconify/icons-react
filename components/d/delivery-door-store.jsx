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
		"content": `<style>.x-2-4fb5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21V3h18v10.2M3 7h18M3 11.5h18M15.5 16h6v5.5h-6Zm3 0v2.5");
}
</style><path class="x-2-4fb5v"/>`,
		"fallback": "uix-sharp:delivery-door-store",
	});
}

export default Component;
