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
		"content": `<style>.bqbby_bhl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 10.25H7A2.25 2.25 0 1 0 4.5 12A2.25 2.25 0 1 0 7 13.75h5m0-3.5h5A2.25 2.25 0 1 1 19.5 12a2.25 2.25 0 1 1-2.5 1.75h-5");
}
</style><path class="bqbby_bhl"/>`,
		"fallback": "uix-sharp:dog-bone",
	});
}

export default Component;
