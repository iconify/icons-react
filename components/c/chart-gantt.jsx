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
		"content": `<style>.qo3zuvb7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18M7 6.5h5.5m-2 5.5H17m-3 5.5h6.5");
}
</style><path class="qo3zuvb7k"/>`,
		"fallback": "uix-sharp:chart-gantt",
	});
}

export default Component;
