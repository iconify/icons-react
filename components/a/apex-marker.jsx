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
		"content": `<style>.r2kihrbql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 15.5l5-10h4l5 10m-16.5 0h19v3h-19Zm5-5h9");
}
</style><path class="r2kihrbql"/>`,
		"fallback": "uix-sharp:apex-marker",
	});
}

export default Component;
