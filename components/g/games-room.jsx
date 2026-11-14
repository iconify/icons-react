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
		"content": `<style>.b9wkxb5nv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5.75h9c3 0 4.25 2.5 4.75 5.5l.5 3.5C22 17 20.5 18.25 19 18.25c-1.25 0-2-.75-2.75-1.75L15 14.75H9L7.75 16.5c-.75 1-1.5 1.75-2.75 1.75c-1.5 0-3-1.25-2.75-3.5l.5-3.5c.5-3 1.75-5.5 4.75-5.5ZM7.5 9v3.5m-1.75-1.75h3.5m6 1.25h.01m2.24-2.25h.01");
}
</style><path class="b9wkxb5nv"/>`,
		"fallback": "uix-sharp:games-room",
	});
}

export default Component;
