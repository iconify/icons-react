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
		"content": `<style>.hz9voaclr {
  d: path("M6 18V6h7.75v12M5 18h9.75m-1-7.5h2.5v6.25h2.5V9l-1.5-1.5");
}

.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.k_j-l-bqs {
  d: path("M8.5 8.5h2.75V11H8.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="hz9voaclr"/><path class="k_j-l-bqs"/></g>`,
		"fallback": "iconoven:fuel-station-sign-sharp",
	});
}

export default Component;
