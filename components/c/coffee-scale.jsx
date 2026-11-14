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
		"content": `<style>.ox860gb0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4h9v5.5A4.5 4.5 0 0 1 11 14a4.5 4.5 0 0 1-4.5-4.5Zm9 1.75h1.25a2.25 2.25 0 0 1 0 4.5H15.5M2.5 14h19M4 14v5.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V14M9.5 17.5h5");
}
</style><path class="ox860gb0v"/>`,
		"fallback": "uix-sharp:coffee-scale",
	});
}

export default Component;
