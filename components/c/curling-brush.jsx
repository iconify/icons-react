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
		"content": `<style>.pvgxe1b-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19.718 4.282l-8.839 8.839M7.343 9.586l7.071 7.071l-2.828 2.828l-7.071-7.071Z");
}
</style><path class="pvgxe1b-g"/>`,
		"fallback": "uix-sharp:curling-brush",
	});
}

export default Component;
