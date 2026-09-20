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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qii79lbir {
  d: path("M6 14h8");
}
</style><g class="hntgybcog"><path class="h8b2rkgcl"/><path class="cu5fjhbmy"/><path class="qii79lbir"/></g>`,
		"fallback": "iconmind:flashcard-outline-thin",
	});
}

export default Component;
