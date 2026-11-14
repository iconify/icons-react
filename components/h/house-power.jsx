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
		"content": `<style>.e8fstcbjm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.544 20.5H3.5v-10L12 3.25l8.5 7.25v1.556M19 14.5l-3.5 3.75h5l-3.5 3.5");
}
</style><path class="e8fstcbjm"/>`,
		"fallback": "uix-sharp:house-power",
	});
}

export default Component;
