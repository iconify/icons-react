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
		"content": `<style>.k666jfb1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 10.25h8v11H8zm2.75 8h2.5M10.59 7.09L12 5.688l1.41 1.402M8.46 4.96a5 5 0 0 1 7.08 0");
}
</style><path class="k666jfb1l"/>`,
		"fallback": "iconoven:hotspot-sharp",
	});
}

export default Component;
