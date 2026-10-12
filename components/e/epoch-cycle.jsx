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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rjxgisbjn {
  d: path("m10.25 9.75l2-1.5v7.5");
}

.tsa_9enlo {
  d: path("M19.75 12a7.75 7.75 0 1 1-2.27-5.48m.27-3.77v4h-4");
}
</style><g class="hntgybcog"><path class="tsa_9enlo"/><path class="rjxgisbjn"/></g>`,
		"fallback": "iconoven:epoch-cycle",
	});
}

export default Component;
