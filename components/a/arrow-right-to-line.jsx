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
		"content": `<style>.jqo0p8bpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.5 5v14m-17-7H16m-5-5l5 5l-5 5");
}
</style><path class="jqo0p8bpb"/>`,
		"fallback": "uix-sharp:arrow-right-to-line",
	});
}

export default Component;
