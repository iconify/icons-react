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
		"content": `<style>.mssft0b0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c2 2.5 4 5 4 8.5a4 4 0 0 1-8 0c0-2 1-3.5 2-4.5q0 2.25 1.5 3c-.5-2.5-.5-5 .5-7ZM5.5 18h13v3.5h-13ZM3 21.5h18");
}
</style><path class="mssft0b0z"/>`,
		"fallback": "uix-sharp:fuel-energy-density",
	});
}

export default Component;
