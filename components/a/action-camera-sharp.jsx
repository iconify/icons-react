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
		"content": `<style>.optez1bab {
  cx: 14.5px;
  cy: 13px;
  r: 3.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.si-3lcc7i {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75h18.5v12.5H2.75zm3 0v-2.5h3.5v2.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vxp1gibff {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 10.5h.01");
}
</style><g class="ux2u0rbkq"><path class="si-3lcc7i"/><circle class="optez1bab"/><path class="vxp1gibff"/></g>`,
		"fallback": "iconoven:action-camera-sharp",
	});
}

export default Component;
