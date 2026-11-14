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
		"content": `<style>.evz-nwjsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 13.5v-9A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5v9m-15.5 0h19l-2 6.5h-15ZM9 7h6m-6 3h3");
}
</style><path class="evz-nwjsu"/>`,
		"fallback": "uix-sharp:business-card-holder",
	});
}

export default Component;
