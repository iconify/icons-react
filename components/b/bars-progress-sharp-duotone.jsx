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

.s0uh9-gee {
  d: path("M3 2L16 2L16 10L3 10C2.4477 10 2 9.5523 2 9L2 3C2 2.4477 2.4477 2 3 2ZM3 14L11 14L11 22L3 22C2.4477 22 2 21.5523 2 21L2 15C2 14.4477 2.4477 14 3 14Z");
}

.vyqyydbgl {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 9C22 9.5523 21.5523 10 21 10L3 10C2.4477 10 2 9.5523 2 9L2 3C2 2.4477 2.4477 2 3 2ZM3 14L21 14C21.5523 14 22 14.4477 22 15L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 15C2 14.4477 2.4477 14 3 14Z");
}
</style><g class="cuyn6tgcc"><path class="vyqyydbgl"/><path class="s0uh9-gee"/></g>`,
		"fallback": "keyline-icons:bars-progress-sharp-duotone",
	});
}

export default Component;
