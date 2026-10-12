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
		"content": `<style>.gw36t3b9h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 8h5m-5 4h5m-5 4h3.5");
}

.h_i28_nrz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 8h.01M8 12h.01M8 16h.01");
}

.p0ku6ybdf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 3.25h15.5v17.5H4.25z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="p0ku6ybdf"/><path class="h_i28_nrz"/><path class="gw36t3b9h"/></g>`,
		"fallback": "iconoven:agenda-list-sharp",
	});
}

export default Component;
