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
		"content": `<style>.h17_-bcle {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12v3l.5 16h-5L12 9l-1.5 12.5h-5l.5-16Zm0 3h12m-9.75 3L8 21.5m7.75-13l.25 13");
}
</style><path class="h17_-bcle"/>`,
		"fallback": "uix-sharp:chinos",
	});
}

export default Component;
