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
		"content": `<style>.h2p65wb5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l1.616 3.775l4.09.371l-3.091 2.704l.912 4.004L12 11.25l-3.527 2.104l.912-4.004l-3.091-2.704l4.09-.371Zm-4.5 15h9V21h-9ZM12 14v3.5");
}
</style><path class="h2p65wb5n"/>`,
		"fallback": "uix-sharp:film-award",
	});
}

export default Component;
