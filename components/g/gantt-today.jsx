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
		"content": `<style>.dl3bwobha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5h8v3H3Zm3.5 5.75h8v3h-8ZM10 16.5h11v3H10Zm7.5-10.75V21.5m0-18.5h.01");
}
</style><path class="dl3bwobha"/>`,
		"fallback": "uix-sharp:gantt-today",
	});
}

export default Component;
