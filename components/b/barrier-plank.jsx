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
		"content": `<style>.pm736sbir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19v7h-19Zm3 7L3 20.5M5.5 12L8 20.5M18.5 12L16 20.5m2.5-8.5l2.5 8.5M6.5 12l3-7m2 7l3-7m2 7l3-7");
}
</style><path class="pm736sbir"/>`,
		"fallback": "uix-sharp:barrier-plank",
	});
}

export default Component;
