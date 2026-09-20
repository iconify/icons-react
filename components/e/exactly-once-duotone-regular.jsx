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
		"content": `<style>.fotxf46ll {
  d: path("m14 12.5 3 3 4.5 -4.5");
}

.iedujiqkb {
  d: path("M7 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.jlt4pubuu {
  d: path("M4 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.ktl0q7bve {
  fill: currentColor;
  d: path("M4 12a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nw8-8vb0d {
  fill: currentColor;
  d: path("M7 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="ktl0q7bve"/><path class="nw8-8vb0d"/><path class="jlt4pubuu"/><path class="iedujiqkb"/><path class="fotxf46ll"/></g>`,
		"fallback": "iconmind:exactly-once-duotone-regular",
	});
}

export default Component;
