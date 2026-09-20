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
		"content": `<style>.e0zkadb7k {
  fill: currentColor;
  d: path("M4 6a8 3 0 0 1 16 0v8a8 3 0 0 1 -16 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nldbk4b3i {
  d: path("M4 6a8 3 0 0 0 16 0");
}

.qjvpl3bst {
  d: path("M4 19h12");
}

.t_rr8ablw {
  d: path("m7 16 -3 3 3 3");
}

.x3l7cj9iq {
  d: path("M4 6a8 3 0 0 1 16 0v8a8 3 0 0 1 -16 0Z");
}
</style><g class="hntgybcog"><path class="e0zkadb7k"/><path class="x3l7cj9iq"/><path class="nldbk4b3i"/><path class="qjvpl3bst"/><path class="t_rr8ablw"/></g>`,
		"fallback": "iconmind:backfill-duotone-thin",
	});
}

export default Component;
