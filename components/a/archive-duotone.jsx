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
		"content": `<style>.kv0-jmbme {
  d: path("M10 13L14 13");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y-4f733an {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 8L20 8C20.5523 8 21 8.4477 21 9L21 17C21 19.2091 19.2091 21 17 21L7 21C4.7909 21 3 19.2091 3 17L3 9C3 8.4477 3.4477 8 4 8Z");
  stroke: none;
}

.zho2v7bvt {
  fill: currentColor;
  d: path("M4 3L20 3C21.6569 3 23 4.3431 23 6L23 7C23 8.6569 21.6569 10 20 10L4 10C2.3431 10 1 8.6569 1 7L1 6C1 4.3431 2.3431 3 4 3Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="y-4f733an"/><path class="zho2v7bvt"/><path class="kv0-jmbme"/></g>`,
		"fallback": "keyline-icons:archive-duotone",
	});
}

export default Component;
