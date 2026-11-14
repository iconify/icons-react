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
		"content": `<style>.sh1o39q4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12a5 6.5 0 1 0 10 0a5 6.5 0 1 0-10 0Zm5-9.5v19M2.5 12h19");
}
</style><path class="sh1o39q4f"/>`,
		"fallback": "uix-sharp:coda",
	});
}

export default Component;
