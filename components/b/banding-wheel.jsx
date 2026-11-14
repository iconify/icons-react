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
		"content": `<style>.pq0bapbws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5a9.5 3.5 0 1 0 19 0a9.5 3.5 0 1 0-19 0ZM12 11v6.5m-5.5 0h11V21h-11Z");
}
</style><path class="pq0bapbws"/>`,
		"fallback": "uix-sharp:banding-wheel",
	});
}

export default Component;
