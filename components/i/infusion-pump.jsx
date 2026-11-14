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

.qcxcnub0y {
  d: path("M16.125 10.5h2.75A1.125 1.125 0 0 1 20 11.625a1.125 1.125 0 0 1-1.125 1.125h-2.75A1.125 1.125 0 0 1 15 11.625a1.125 1.125 0 0 1 1.125-1.125m-9.625 2c0 2.5 3 3 7 1.5");
}

.weroklb0n {
  d: path("M12 2.5v17m-4 2h8m-4-2v2M15.25 9h4.5a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-4.5a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 15.25 9M6.5 4.5za3 3 0 0 1 3 3v2a3 3 0 0 1-3 3a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3m0-2H12m-5.5 0v2");
}
</style><g class="hntgybcog"><path class="weroklb0n"/><path class="qcxcnub0y"/></g>`,
		"fallback": "uix:infusion-pump",
	});
}

export default Component;
