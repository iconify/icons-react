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
		"content": `<style>.v-efj3pyf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3S4.5 9 4.5 13a5.5 5.5 0 0 0 11 0C15.5 9 10 3 10 3Zm8 10s-2 2.5-2 4a2 2 0 0 0 4 0c0-1.5-2-4-2-4Z");
}
</style><path class="v-efj3pyf"/>`,
		"fallback": "uix-sharp:bleeding",
	});
}

export default Component;
