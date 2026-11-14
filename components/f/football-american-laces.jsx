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
		"content": `<style>.d3srmzbgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12C6 5 18 5 21.5 12C18 19 6 19 2.5 12Zm5 0h9M9 10v4m3-4v4m3-4v4");
}
</style><path class="d3srmzbgk"/>`,
		"fallback": "uix-sharp:football-american-laces",
	});
}

export default Component;
