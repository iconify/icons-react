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
		"content": `<style>.nj-3n4b-c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5h12l3.5 14h-19Zm6 0v14M5 9h14M4 13h16");
}
</style><path class="nj-3n4b-c"/>`,
		"fallback": "uix-sharp:gym-floor",
	});
}

export default Component;
