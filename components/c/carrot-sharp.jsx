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
		"content": `<style>.vedub9hew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.2 17.66l7.33-11.13a3.5 3.5 0 0 1 4.94 4.94L6.34 18.8l-.623.511l-1.14-1.14zM18.25 5.75l2.5-2.5m-4.75 2l.75-2.5m2 5.25l2.5-.75m-11 5l1.5 1.5");
}
</style><path class="vedub9hew"/>`,
		"fallback": "iconoven:carrot-sharp",
	});
}

export default Component;
