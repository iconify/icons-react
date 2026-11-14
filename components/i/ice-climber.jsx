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
		"content": `<style>.j1x-nnz2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5V14l3.5-3.5L9 12h4l4-2.5l4 3.5v8.5Zm8-9.5l4.5-7.5m-3-1.5l3 1.5Q18.5 6 20 9");
}
</style><path class="j1x-nnz2j"/>`,
		"fallback": "uix-sharp:ice-climber",
	});
}

export default Component;
