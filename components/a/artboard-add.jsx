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
		"content": `<style>.pwy6w_13d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5V17M14 2.5v11m-11.5-8H17M2.5 14h11m4.5 1v6m-3-3h6");
}
</style><path class="pwy6w_13d"/>`,
		"fallback": "uix-sharp:artboard-add",
	});
}

export default Component;
