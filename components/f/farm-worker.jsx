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
		"content": `<style>.y_qosabfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h19M8 8c0-4 1.5-5 4-5s4 1 4 5M8 8v2.5a4 4 0 0 0 8 0V8M4.5 21.5c0-2.5 3.25-4.25 7.5-4.25s7.5 1.75 7.5 4.25");
}
</style><path class="y_qosabfv"/>`,
		"fallback": "uix-sharp:farm-worker",
	});
}

export default Component;
