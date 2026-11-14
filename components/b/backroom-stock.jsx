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
		"content": `<style>.vnuor4n1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m18-19v19m-18-10h18m-18 10h18M5.75 6h5v5.5h-5Zm7.75 0h4.75v5.5H13.5Zm-7.75 9.5h7v6h-7Z");
}
</style><path class="vnuor4n1f"/>`,
		"fallback": "uix-sharp:backroom-stock",
	});
}

export default Component;
