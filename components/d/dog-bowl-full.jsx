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
		"content": `<style>.v-j6mtbgj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.5h18.5l-2.25 7H5Zm2.25 0A3 3 0 0 1 9.5 8a2.5 2.5 0 0 1 5 0a3 3 0 0 1 4.5 3.5");
}
</style><path class="v-j6mtbgj"/>`,
		"fallback": "uix-sharp:dog-bowl-full",
	});
}

export default Component;
