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
		"content": `<style>.v671x7pou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5v2m-2.5 0h5v9h-5Zm2.5 9v8m5.5-13H19v7h-4.5Zm2.25 7v6M9 21.5c-2-2.5-4-4-5-5");
}
</style><path class="v671x7pou"/>`,
		"fallback": "uix-sharp:bulrush",
	});
}

export default Component;
