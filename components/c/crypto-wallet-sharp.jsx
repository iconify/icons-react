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
		"content": `<style>.ejhw78b9j {
  d: path("M16.75 10.25h4.5v5.5h-4.5a2.75 2.75 0 0 1 0-5.5Zm-8.5-.75l3 1.75v3.5l-3 1.75l-3-1.75v-3.5Z");
}

.u0gwqyjub {
  d: path("M2.75 5.75h18.5v14.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="u0gwqyjub"/><path class="ejhw78b9j"/></g>`,
		"fallback": "iconoven:crypto-wallet-sharp",
	});
}

export default Component;
