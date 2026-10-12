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
		"content": `<style>.s7hyiyb2c {
  d: path("M4.75 2.75h14.5v18.5H4.75zm3 0v18.5");
}

.u1f8d-qjb {
  cx: 13.5px;
  cy: 12px;
  r: 3.25px;
}

.vew-d5b-c {
  d: path("M10.25 12h6.5M13.5 8.75v6.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="s7hyiyb2c"/><circle class="u1f8d-qjb"/><path class="vew-d5b-c"/></g>`,
		"fallback": "iconoven:atlas-sharp",
	});
}

export default Component;
