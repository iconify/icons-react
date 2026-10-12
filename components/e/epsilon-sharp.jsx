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
		"content": `<style>.ne28slb0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.25 6.5c-1-1.25-2.75-2-4.75-2c-3 0-5.25 1.75-5.25 3.75S9.25 12 12 12m0 0c-3.25 0-5.75 1.75-5.75 4s2.5 3.75 6 3.75c2 0 3.75-.75 5-2M12 12h3.5");
}
</style><path class="ne28slb0r"/>`,
		"fallback": "iconoven:epsilon-sharp",
	});
}

export default Component;
