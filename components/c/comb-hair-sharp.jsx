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
		"content": `<style>.i7frgd55s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h3v11h-3zm0 2H6.5m3.5 2.5H6.5m3.5 2.5H6.5m3.5 2.5H6.5m5 2.25v6.75M16 3c1.5 2.5-1 4.5.5 7s-1 4.5.5 7m2.5-12c1.5 2.5-1 4.5.5 7s-1 4.5.5 7");
}
</style><path class="i7frgd55s"/>`,
		"fallback": "iconoven:comb-hair-sharp",
	});
}

export default Component;
