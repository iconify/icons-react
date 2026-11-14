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
		"content": `<style>.amw1sioot {
  d: path("M15.5 8H19v3.5");
}

.hac_4ac9i {
  d: path("m7 16.5l4-4.5l3 2.5L19 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}
</style><g class="hntgybcog"><path class="p8u760b4u"/><path class="hac_4ac9i"/><path class="amw1sioot"/></g>`,
		"fallback": "uix:graph-results",
	});
}

export default Component;
