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
		"content": `<style>.cugr_obga {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 13a8 8 0 0 0 16 0v-2.597L18.5 8.35l.25-4.1l.109-2.136L17.15 3.4L14 5.8a8 8 0 0 0-2-.55a8 8 0 0 0-2 .25L6.85 3.1L5.141 1.814L5.25 3.95l.25 4.1A7.9 7.9 0 0 0 4 13Z");
}

.rrnp7cvhy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 12h.01M15 12h.01");
}

.sfscl2ift {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.5 16l1.25 1.25L12 16l1.25 1.25L14.5 16m-9.75-1.5l2.25.25m12.25-.25l-2.25.25");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="cugr_obga"/><path class="rrnp7cvhy"/><path class="sfscl2ift"/></g>`,
		"fallback": "iconoven:cat-smile-sharp",
	});
}

export default Component;
