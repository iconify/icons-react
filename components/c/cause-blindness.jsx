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
		"content": `<style>.u0ehisbrc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.938 14.902A7 7 0 0 1 9.75 15C6.6 15 4 13 2.5 9.75q.532-1.151 1.237-2.08m4.826-3.072A7 7 0 0 1 9.75 4.5c3.15 0 5.75 2 7.25 5.25a11.2 11.2 0 0 1-1.236 2.079M3.5 3.5l17 17");
}
</style><path class="u0ehisbrc"/>`,
		"fallback": "uix-sharp:cause-blindness",
	});
}

export default Component;
