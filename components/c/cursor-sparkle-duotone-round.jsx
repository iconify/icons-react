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
		"content": `<style>.e7em_11cg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 3c.002 2.005 1.995 3.998 4 4c-2.005.002-3.998 1.995-4 4c-.002-2.005-1.995-3.998-4-4c2.005-.002 3.998-1.995 4-4m5.316 8.051l9 3a1 1 0 0 1 0 1.898l-1.473.491a2.416 2.416 0 0 1-3.403 3.403l-.491 1.473a1 1 0 0 1-1.898 0l-3-9a1.001 1.001 0 0 1 1.265-1.265");
}

.ft5dv1b6b {
  fill: none;
}

.h2ti_vbuq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 12l9 3l-3 1l1 1a1.414 1.414 0 0 1-2 2l-1-1l-1 3zM7 3c0 2 2 4 4 4c-2 0-4 2-4 4c0-2-2-4-4-4c2 0 4-2 4-4");
}
</style><g class="ft5dv1b6b"><path class="e7em_11cg"/><path class="h2ti_vbuq"/></g>`,
		"fallback": "coolicons:cursor-sparkle-duotone-round",
	});
}

export default Component;
