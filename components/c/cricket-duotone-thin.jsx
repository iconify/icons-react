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
		"content": `<style>.epoh96bbt {
  d: path("M16 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fg_a8lwva {
  d: path("M6 3h6v11H6Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k4e9xwitt {
  fill: currentColor;
  d: path("M6 3h6v11H6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lehy25blz {
  fill: currentColor;
  d: path("M16 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zt2ojnbyc {
  d: path("M9 14v7");
}
</style><g class="hntgybcog"><path class="k4e9xwitt"/><path class="lehy25blz"/><path class="fg_a8lwva"/><path class="zt2ojnbyc"/><path class="epoh96bbt"/></g>`,
		"fallback": "iconmind:cricket-duotone-thin",
	});
}

export default Component;
