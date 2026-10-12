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
		"content": `<style>.rjxgisbjn {
  d: path("m10.25 9.75l2-1.5v7.5");
}

.tsa_9enlo {
  d: path("M19.75 12a7.75 7.75 0 1 1-2.27-5.48m.27-3.77v4h-4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="tsa_9enlo"/><path class="rjxgisbjn"/></g>`,
		"fallback": "iconoven:epoch-cycle-sharp",
	});
}

export default Component;
