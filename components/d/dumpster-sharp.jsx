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
		"content": `<style>.k1fj2-qhs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.75h18.5v8.5H2.75zM6.5 16.5h3m5 0h3M4.25 11.75l13.75-8");
}
</style><path class="k1fj2-qhs"/>`,
		"fallback": "iconoven:dumpster-sharp",
	});
}

export default Component;
