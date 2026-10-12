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
		"content": `<style>.jtjgc9yrk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 19.6a4 4 0 0 1-.55-7.96a5.75 5.75 0 0 1 10.65-1.39a4.5 4.5 0 0 1-.6 9.35Z");
}

.r8i1ocbvm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17.25h.01");
}

.u50aqihah {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 12.25a1.75 1.75 0 1 1 2.5 1.6l-.75.375V15");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="jtjgc9yrk"/><path class="u50aqihah"/><path class="r8i1ocbvm"/></g>`,
		"fallback": "iconoven:hallucination-sharp",
	});
}

export default Component;
