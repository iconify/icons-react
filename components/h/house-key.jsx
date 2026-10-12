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
		"content": `<style>.af11bwb4u {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.75 12.5l9.75-9.75m-2 2l2 2m-4.5.5l2 2");
}

.emkob7bel {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 16.25h.01");
}

.ns53ffbbe {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.96 11.54l2.33 1.92q.96.79.96 2.04V19q0 1.25-1.25 1.25H4q-1.25 0-1.25-1.25v-3.5q0-1.25.96-2.04l2.33-1.92q.96-.79 1.92 0");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ns53ffbbe"/><path class="emkob7bel"/><path class="af11bwb4u"/></g>`,
		"fallback": "iconoven:house-key",
	});
}

export default Component;
