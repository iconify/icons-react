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
		"content": `<style>.gv5xmqiem {
  d: path("M14.39 5.42a7 7 0 0 1 0 13.16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nuc2dr9ql {
  d: path("m12 16 -3 3 3 3");
}

.qck_wensm {
  d: path("M9.61 18.58a7 7 0 0 1 0 -13.16");
}

.wzx0dxb2r {
  d: path("m12 2 3 3 -3 3");
}
</style><g class="nrj6p8qat"><path class="gv5xmqiem"/><path class="qck_wensm"/><path class="wzx0dxb2r"/><path class="nuc2dr9ql"/></g>`,
		"fallback": "iconmind:circular-dep-outline-regular",
	});
}

export default Component;
