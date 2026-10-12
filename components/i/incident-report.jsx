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
		"content": `<style>.gedkbpbls {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.95 4.76l7.35 13.73q.95 1.76-1.05 1.76H4.75q-2 0-1.05-1.76l7.35-13.73q.95-1.76 1.9 0M12 9v5.5");
}

.r8i1ocbvm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17.25h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="gedkbpbls"/><path class="r8i1ocbvm"/></g>`,
		"fallback": "iconoven:incident-report",
	});
}

export default Component;
