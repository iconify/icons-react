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
		"content": `<style>.wbuzqrb3q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.621 10.121a3 3 0 1 1 0-4.242M9 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm7.75 1.75c.15-.85.85-1.25 1.75-1.25s1.75.6 1.75 1.5c0 1.4-3.5 2.5-3.5 3.75h3.5m-8.25 0V21m-3.25-3.25L12 21l3.25-3.25");
}
</style><path class="wbuzqrb3q"/>`,
		"fallback": "uix-sharp:co2-down",
	});
}

export default Component;
