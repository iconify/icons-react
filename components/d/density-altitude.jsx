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
		"content": `<style>.mhk-d9b-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 19.5l6-14l6 14ZM19 4.5v15M16.75 6.75L19 4.5l2.25 2.25m-4.5 10.5L19 19.5l2.25-2.25");
}
</style><path class="mhk-d9b-q"/>`,
		"fallback": "uix-sharp:density-altitude",
	});
}

export default Component;
