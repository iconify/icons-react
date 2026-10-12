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
		"content": `<style>.bjx4c4b4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 9H12c4 0 7.3 2.7 8.75 6.5l.35.99l-1.05.01H2.75V9zm2 2.75h8.5m-4 3v1.75m-7.5 3h18.5M7 19.5v1.25m10-1.25v1.25");
}
</style><path class="bjx4c4b4t"/>`,
		"fallback": "iconoven:bullet-train-sharp",
	});
}

export default Component;
