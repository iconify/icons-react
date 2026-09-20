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
		"content": `<style>.cus5btazq {
  d: path("M2 12a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.p8a31xr4o {
  d: path("M16 12h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wn519caci {
  d: path("m19 9 3 3 -3 3");
}

.ytauj3b5f {
  d: path("M4 10a3 3 0 0 1 5.12 -2.12");
}
</style><g class="s0phu2bbs"><path class="cus5btazq"/><path class="ytauj3b5f"/><path class="p8a31xr4o"/><path class="wn519caci"/></g>`,
		"fallback": "iconmind:decrypt-outline-bold",
	});
}

export default Component;
