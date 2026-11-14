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
		"content": `<style>.y19ic75yo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 17c-2 1.5-8 1.5-8-4c0-4.5 5-7 8-10.5c3 3.5 8 6 8 10.5c0 5.5-6 5.5-8 4Zm0 4.5v-14");
}
</style><path class="y19ic75yo"/>`,
		"fallback": "uix-sharp:bodhi-leaf",
	});
}

export default Component;
