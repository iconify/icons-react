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
		"content": `<style>.usghj-brc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h9.5v18H3Zm4.75 0v18M18 3v6.5m-2.75-3.75L18 3l2.75 2.75M18 14.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="usghj-brc"/>`,
		"fallback": "uix-sharp:accessible-elevator",
	});
}

export default Component;
