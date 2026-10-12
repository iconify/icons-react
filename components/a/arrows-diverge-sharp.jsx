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
		"content": `<style>.jqpc1_rmu {
  d: path("M3.75 12h5c3.5 0 4.25-6 8-6H20M8.75 12c3.5 0 4.25 6 8 6H20");
}

.uxp-y7btg {
  d: path("m17.25 3l3 3l-3 3m0 6l3 3l-3 3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="jqpc1_rmu"/><path class="uxp-y7btg"/></g>`,
		"fallback": "iconoven:arrows-diverge-sharp",
	});
}

export default Component;
