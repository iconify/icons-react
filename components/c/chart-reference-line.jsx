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
		"content": `<style>.jccjmybrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19m-18-9h4v9h-4ZM10 4h4v17.5h-4Zm6.5 3h4v14.5h-4Zm-14 2.5h5.25m4 0h.5m3.5 0H14.5m3.75 0h.5");
}
</style><path class="jccjmybrj"/>`,
		"fallback": "uix-sharp:chart-reference-line",
	});
}

export default Component;
