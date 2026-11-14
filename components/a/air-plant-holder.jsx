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
		"content": `<style>.pedet9biq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 21.5h10m-5-7v7M8.5 12q3.5 5 7 0m-3.5-.25Q9 8 5.5 6m6.5 5.75V2.5m0 9.25Q15 8 18.5 6");
}
</style><path class="pedet9biq"/>`,
		"fallback": "uix-sharp:air-plant-holder",
	});
}

export default Component;
