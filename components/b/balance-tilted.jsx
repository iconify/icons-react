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
		"content": `<style>.ofy917mcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11v9.5m-4 0h8M4 13l16-4M3 9h6M6 9v3.5M15 6h6m-3 0v3.5m-12.5-5h1A1.5 1.5 0 0 1 8 6v1.5A1.5 1.5 0 0 1 6.5 9h-1A1.5 1.5 0 0 1 4 7.5V6a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="ofy917mcz"/>`,
		"fallback": "uix:balance-tilted",
	});
}

export default Component;
