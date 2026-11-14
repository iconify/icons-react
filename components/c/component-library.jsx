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
		"content": `<style>.bdbnn2bqa {
  d: path("M2.5 18.5v-13A1.5 1.5 0 0 1 4 4h5l2 2.5h9A1.5 1.5 0 0 1 21.5 8v10.5A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5");
}

.dx2t3_b_e {
  d: path("m13.061 10.811l1.378 1.378a1.5 1.5 0 0 1 0 2.122l-1.378 1.378a1.5 1.5 0 0 1-2.122 0l-1.378-1.378a1.5 1.5 0 0 1 0-2.122l1.378-1.378a1.5 1.5 0 0 1 2.122 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bdbnn2bqa"/><path class="dx2t3_b_e"/></g>`,
		"fallback": "uix:component-library",
	});
}

export default Component;
