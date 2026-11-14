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
		"content": `<style>.xbym8ybep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v19h-15Zm4 5h.01M8.5 12h.01m-.01 4.5h.01m2.99-9H16M11.5 12h3m-3 4.5H16");
}
</style><path class="xbym8ybep"/>`,
		"fallback": "uix-sharp:cast-list",
	});
}

export default Component;
