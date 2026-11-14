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
		"content": `<style>.w1u02lbgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 16.75L10.5 6.5h3L17 16.75ZM12 6.5v-4M2.5 20.25q2.375-1.5 4.75 0t4.75 0t4.75 0t4.75 0");
}
</style><path class="w1u02lbgk"/>`,
		"fallback": "uix-sharp:buoy",
	});
}

export default Component;
