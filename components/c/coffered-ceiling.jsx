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
		"content": `<style>.ytfdpg59z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12l3.5 16h-19Zm4 0L8.75 20M14 4l1.25 16M5 8.5h14m-15 5h16");
}
</style><path class="ytfdpg59z"/>`,
		"fallback": "uix-sharp:coffered-ceiling",
	});
}

export default Component;
