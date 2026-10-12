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
		"content": `<style>.fwxnfsbxb {
  d: path("m8.5 17.75l1-2.5h5l1 2.5");
}

.s2ny7rbmr {
  cx: 12px;
  cy: 11.5px;
  r: 2.25px;
}

.x_d46pc4p {
  d: path("M4.75 3.75h14.5v17.5H4.75zM10 6.5h4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="x_d46pc4p"/><circle class="s2ny7rbmr"/><path class="fwxnfsbxb"/></g>`,
		"fallback": "iconoven:badge-lanyard-sharp",
	});
}

export default Component;
