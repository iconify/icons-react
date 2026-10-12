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
		"content": `<style>.c2o891bmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.25h13A2.75 2.75 0 1 0 13 6.5m-3.25 6.75h8.5a2.5 2.5 0 1 1-2.5 2.5M5.5 13.5v5m2.17-3.75l-4.34 2.5m4.34 0l-4.34-2.5m7.92 2v4.5m1.95-3.37l-3.9 2.25m3.9 0l-3.9-2.25");
}
</style><path class="c2o891bmr"/>`,
		"fallback": "iconoven:blizzard-sharp",
	});
}

export default Component;
