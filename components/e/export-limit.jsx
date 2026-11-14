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
		"content": `<style>.odlbwkdxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.72 11.5H3.5l2-9h13l1.996 8.981M12 2.5v9M4.5 7h15m-11 4.5V21m-3 0h6m4-6.75h6m-3 2.75v5m-2.25-2.75L18.5 17l2.25 2.25");
}
</style><path class="odlbwkdxh"/>`,
		"fallback": "uix-sharp:export-limit",
	});
}

export default Component;
