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
		"content": `<style>.p0cjpe1if {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v6.25M9 5.5l3 3.25l3-3.25m-3 16v-6.25M9 18.5l3-3.25l3 3.25M4 12h16");
}
</style><path class="p0cjpe1if"/>`,
		"fallback": "uix-sharp:arrows-up-down-to-line",
	});
}

export default Component;
