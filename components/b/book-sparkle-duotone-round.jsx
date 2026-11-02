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
		"content": `<style>.e7oz91b2j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 7a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v8a3 3 0 0 1-3 3H7a1 1 0 0 0-1 1a1 1 0 0 1-2 0Z");
}

.ft5dv1b6b {
  fill: none;
}

.y5kq8lbrz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 17h10a2 2 0 0 0 2-2V7a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v12m2-2a2 2 0 1 0 0 4m0 0h6a4 4 0 0 0 4-4M12 6c0 2 2 4 4 4c-2 0-4 2-4 4c0-2-2-4-4-4c2 0 4-2 4-4");
}
</style><g class="ft5dv1b6b"><path class="e7oz91b2j"/><path class="y5kq8lbrz"/></g>`,
		"fallback": "coolicons:book-sparkle-duotone-round",
	});
}

export default Component;
