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
		"content": `<style>.cu5fjhbmy {
  d: path("M16 6v5h5");
}

.h8b2rkgcl {
  d: path("M3 6h13l5 5v7H3Z");
}

.qii79lbir {
  d: path("M6 14h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="h8b2rkgcl"/><path class="cu5fjhbmy"/><path class="qii79lbir"/></g>`,
		"fallback": "iconmind:flashcard-outline-bold",
	});
}

export default Component;
