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
		"content": `<style>.krzcdbhpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm6.75-2.75L20 3.5M17.5 6l2 2m-4.5.5l1.75 1.75M15 17.5h6v4h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="krzcdbhpq"/>`,
		"fallback": "uix-sharp:gpg-key",
	});
}

export default Component;
