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
		"content": `<style>.p5db0vbfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6.5h17v9h-17Zm1.5 0L3 2.75h18L19 6.5m-7 9v2.25L8 21.5m-3 0h6");
}
</style><path class="p5db0vbfl"/>`,
		"fallback": "uix-sharp:field-monitor",
	});
}

export default Component;
