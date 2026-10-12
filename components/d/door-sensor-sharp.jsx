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
		"content": `<style>.e__vqluxs {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18 6.75h3.25v6H18z");
}

.l7xf9eb2w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11.5 12h.01");
}

.sbz0un9qe {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 2.75h11v18.5h-11z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="sbz0un9qe"/><path class="l7xf9eb2w"/><path class="e__vqluxs"/></g>`,
		"fallback": "iconoven:door-sensor-sharp",
	});
}

export default Component;
