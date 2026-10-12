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
		"content": `<style>.avrfivb8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.5h12.5v8H2.75zM7 9.5v8m4-8v8m4.25-6.5h2.5v5h-2.5zm2.5 2.5h3.5m-15.5 4v2.75M9 17.5v2.75M19.5 3c1.15 1.5 1.75 2.55 1.75 3.4a1.75 1.75 0 0 1-3.5 0c0-.85.6-1.9 1.75-3.4Z");
}
</style><path class="avrfivb8q"/>`,
		"fallback": "iconoven:fuel-pump-sharp",
	});
}

export default Component;
