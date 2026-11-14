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

.ve0vvhtpj {
  d: path("M9.75 3h4.5A1.75 1.75 0 0 1 16 4.75v2a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 6.75v-2A1.75 1.75 0 0 1 9.75 3M12 8.5v7m-2.75 0h5.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 14.75 21h-5.5a1.75 1.75 0 0 1-1.75-1.75v-2a1.75 1.75 0 0 1 1.75-1.75");
}

.xgjlv1o0e {
  d: path("M4 21V3h16v18M2.5 21h19");
}
</style><g class="hntgybcog"><path class="xgjlv1o0e"/><path class="ve0vvhtpj"/></g>`,
		"fallback": "uix:cnc-machine",
	});
}

export default Component;
