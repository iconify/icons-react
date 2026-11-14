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
		"content": `<style>.kczljxfwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4v15.5m0-3.75a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM20.5 4v15.5M13 15.75a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}
</style><path class="kczljxfwx"/>`,
		"fallback": "uix-sharp:dyslexia-font",
	});
}

export default Component;
