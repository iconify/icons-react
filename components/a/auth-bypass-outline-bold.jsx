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
		"content": `<style>.bgtolgbkt {
  d: path("M8 15.5h8");
}

.iml3cbclx {
  d: path("M8 7a4 4 0 0 1 8 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uqwi0oy1e {
  d: path("m13.5 13 2.5 2.5 -2.5 2.5");
}

.xfs8wlfhn {
  d: path("M5 11.5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="xfs8wlfhn"/><path class="iml3cbclx"/><path class="bgtolgbkt"/><path class="uqwi0oy1e"/></g>`,
		"fallback": "iconmind:auth-bypass-outline-bold",
	});
}

export default Component;
