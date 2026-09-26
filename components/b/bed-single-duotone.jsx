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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.t71w2db2c {
  fill-rule: evenodd;
  d: path("M3 18L3 13C3 11.3431 4.3431 10 6 10L18 10C19.6569 10 21 11.3431 21 13L21 18C21 19.6569 19.6569 21 18 21L6 21C4.3431 21 3 19.6569 3 18ZM6 12C5.4477 12 5 12.4477 5 13L5 14L19 14L19 13C19 12.4477 18.5523 12 18 12L6 12Z");
}

.y3u832j3b {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 18L3 13C3 11.3431 4.3431 10 6 10L6 6C6 4.3431 7.3431 3 9 3L15 3C16.6569 3 18 4.3431 18 6L18 10C19.6569 10 21 11.3431 21 13L21 18C21 19.6569 19.6569 21 18 21L6 21C4.3431 21 3 19.6569 3 18Z");
}
</style><g class="cuyn6tgcc"><path class="y3u832j3b"/><path clip-rule="evenodd" class="t71w2db2c"/></g>`,
		"fallback": "keyline-icons:bed-single-duotone",
	});
}

export default Component;
