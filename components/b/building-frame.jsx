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
		"content": `<style>.kleq5sulr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5v18m7.5-18v18m7.5-18v18m-17-18h19m-19 6h19m-19 6h19m-17 6l7.5-6");
}
</style><path class="kleq5sulr"/>`,
		"fallback": "uix-sharp:building-frame",
	});
}

export default Component;
