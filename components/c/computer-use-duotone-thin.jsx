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
		"content": `<style>.e3tmhtu7v {
  fill: currentColor;
  d: path("M8 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.k5rpi3b6m {
  d: path("M12 4h6a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3Z");
}

.m86g1e0md {
  d: path("M10 7.5a5.5 5.5 0 0 1 5.5 5.5");
}

.qi3wr9i3q {
  d: path("M8 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ushtob5rn {
  fill: currentColor;
  d: path("M12 4h6a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="ushtob5rn"/><path class="e3tmhtu7v"/><path class="k5rpi3b6m"/><path class="qi3wr9i3q"/><path class="m86g1e0md"/></g>`,
		"fallback": "iconmind:computer-use-duotone-thin",
	});
}

export default Component;
