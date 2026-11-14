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
		"content": `<style>.xn-518zch {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 21.5h20m-19.5-10C5 11.5 6 15 9 15s5-5 8.25-7.25m0 0V2.5m0 0l3.5 2l-3.5 2");
}
</style><path class="xn-518zch"/>`,
		"fallback": "uix-sharp:improvement-plan",
	});
}

export default Component;
