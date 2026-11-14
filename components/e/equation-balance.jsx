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
		"content": `<style>.hiwmhccqp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.5h14m-7 0v15m-4 0h8M5 4.5V11m-2.5 0h5a2.5 2.5 0 0 1-5 0ZM19 4.5V11m-2.5 0h5a2.5 2.5 0 0 1-5 0Z");
}
</style><path class="hiwmhccqp"/>`,
		"fallback": "uix-sharp:equation-balance",
	});
}

export default Component;
