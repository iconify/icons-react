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
		"content": `<style>.vfvcq4bmj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 9a5.75 5.75 0 0 1 11.5 0c0 3.5-3.5 4.5-3.5 7.25a3.25 3.25 0 0 1-6 1.75m1-8.5a2.75 2.75 0 0 1 5.5 0m-11-5.75l16.5 16.5");
}
</style><path class="vfvcq4bmj"/>`,
		"fallback": "iconoven:deaf-sharp",
	});
}

export default Component;
