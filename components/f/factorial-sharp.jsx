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
		"content": `<style>.edumxmqfg {
  cx: 17.5px;
  cy: 19px;
  r: 1.5px;
}

.mzy408_qc {
  d: path("M4 20.25v-9.5m0 3a3.5 3.5 0 0 1 7 0v6.5m6.5-16.5v10.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mzy408_qc"/><circle class="edumxmqfg"/></g>`,
		"fallback": "iconoven:factorial-sharp",
	});
}

export default Component;
