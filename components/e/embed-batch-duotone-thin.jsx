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
		"content": `<style>.c9httolpm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 15v4h18v-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eek79-bjc {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M19.5 5 22 7.5l-4 4 -4 -4L16.5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i6tda2bmi {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7.5 5 10 7.5l-4 4 -4 -4L4.5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ll1d18k1h {
  d: path("M3 15v4h18v-4");
}

.p0mfrtbaw {
  d: path("M7.5 5 10 7.5l-4 4 -4 -4L4.5 5");
}

.vs9x-_bah {
  d: path("M19.5 5 22 7.5l-4 4 -4 -4L16.5 5");
}
</style><g class="hntgybcog"><path class="i6tda2bmi"/><path class="eek79-bjc"/><path class="c9httolpm"/><path class="p0mfrtbaw"/><path class="vs9x-_bah"/><path class="ll1d18k1h"/></g>`,
		"fallback": "iconmind:embed-batch-duotone-thin",
	});
}

export default Component;
