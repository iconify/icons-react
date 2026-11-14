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
		"content": `<style>.r1pm1vbkz {
  d: path("M7 3h10v9H7Zm5 9v9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x79lbbbgh {
  d: path("M10.5 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM3.5 5h.01m16.99-.5h.01M4 10.5h.01M20 11h.01");
}
</style><g class="ulnmmdpxh"><path class="r1pm1vbkz"/><path class="x79lbbbgh"/></g>`,
		"fallback": "uix-sharp:air-pollution-sensor",
	});
}

export default Component;
