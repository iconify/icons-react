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
		"content": `<style>.ypn9zpbhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5h12V13l-4 4v3h-4v-3l-4-4ZM6 8h12m-3.5 8.5H19");
}
</style><path class="ypn9zpbhh"/>`,
		"fallback": "uix-sharp:gravity-dispenser",
	});
}

export default Component;
