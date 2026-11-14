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
		"content": `<style>.ofrlidw6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 15.5a7.5 7.5 0 0 1 15 0ZM12 3v5m0 3v4.5M3 19h18");
}
</style><path class="ofrlidw6z"/>`,
		"fallback": "uix-sharp:capitol-dome",
	});
}

export default Component;
