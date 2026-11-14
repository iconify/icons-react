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
		"content": `<style>.fk99dhbwr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5C5 8 8.5 4.5 12 4.5s7 3.5 9.5 15M13 9l3 6.5m-6.5-5l3 6.5M7 15l1.5 3.5");
}
</style><path class="fk99dhbwr"/>`,
		"fallback": "uix-sharp:groomed-slope",
	});
}

export default Component;
