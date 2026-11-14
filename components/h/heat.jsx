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
		"content": `<style>.ibc0upbvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 17c-2-2 2-4.5 0-6.5S9 6 7 4m5 13c-2-2 2-4.5 0-6.5S14 6 12 4m5 13c-2-2 2-4.5 0-6.5S19 6 17 4M3 20.5h18");
}
</style><path class="ibc0upbvf"/>`,
		"fallback": "uix-sharp:heat",
	});
}

export default Component;
