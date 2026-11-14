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
		"content": `<style>.ikaohsb-d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19m-19 14h19m-11-14c.25 2 1.5 3.5 2.75 3c1 1.5 3.25 1.25 4.25-.25c.75-1 1.25-2 2-2.75m-9 14c.25-2 1.5-3.5 2.75-3c1-1.5 3.25-1.25 4.25.25c.75 1 1.25 2 2 2.75m-16-7H9m-2-2l2 2l-2 2");
}
</style><path class="ikaohsb-d"/>`,
		"fallback": "uix-sharp:blocked-artery",
	});
}

export default Component;
