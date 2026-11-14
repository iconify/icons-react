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
		"content": `<style>.tsy1tacck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7H19v10H2.5Zm19 3.5v3M6.5 10v4m3.5-4v4m3.5-4v4");
}
</style><path class="tsy1tacck"/>`,
		"fallback": "uix-sharp:energy-level",
	});
}

export default Component;
