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
		"content": `<style>.sexd61tps {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6v12M21 6v12M7.5 9h9v6h-9ZM3 12h4.5m9 0H21");
}
</style><path class="sexd61tps"/>`,
		"fallback": "uix-sharp:constraint-left-right",
	});
}

export default Component;
