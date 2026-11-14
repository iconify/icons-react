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
		"content": `<style>.bikoqpbnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5q0-2 2-2h3.5q2 0 2 2l-.5 15q0 2-2 2H5.5q-2 0-2-2Zm18 0q0-2-2-2h-3.5q-2 0-2 2l.5 15q0 2 2 2h2.5q2 0 2-2Zm-18 3h7.5m-7.25 7h7m3.25-7H21m-7.25 7h7");
}
</style><path class="bikoqpbnp"/>`,
		"fallback": "uix-sharp:goalie-pads",
	});
}

export default Component;
