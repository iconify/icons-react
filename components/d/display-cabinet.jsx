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
		"content": `<style>.etho2wtdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 2.5h15v16h-15Zm3 16v3m9-3v3m-12-11h15M8 8l2.5-2.5M8 16l2.5-2.5");
}
</style><path class="etho2wtdf"/>`,
		"fallback": "uix-sharp:display-cabinet",
	});
}

export default Component;
