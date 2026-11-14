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
		"content": `<style>.b9579ac5n {
  d: path("M8.75 9h6.5v9.25h-6.5Zm0 2.5h6.5m-6.5 4.25h6.5");
}

.ib3epmbgp {
  d: path("M2.5 2.5h19M7 2.5V6m10-3.5V6M2.5 6h19v15h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ib3epmbgp"/><path class="b9579ac5n"/></g>`,
		"fallback": "uix-sharp:drinks-aisle",
	});
}

export default Component;
