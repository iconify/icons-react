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
		"content": `<style>.a562fv74t {
  d: path("M6 22h12");
}

.mbt4yzbhr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mpa5af89q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 3h10v13H3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p3knk71rt {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M6 22h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rn2_dtbur {
  d: path("M3 3h10v13H3");
}

.ubbszwy6j {
  d: path("m13 8 4 4v4");
}

.v6y69ha8m {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m13 8 4 4v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="mpa5af89q"/><path class="v6y69ha8m"/><path class="mbt4yzbhr"/><path class="p3knk71rt"/><path class="rn2_dtbur"/><path class="ubbszwy6j"/><path class="z9ittvbis"/><path class="a562fv74t"/></g>`,
		"fallback": "iconmind:cliff-duotone-regular",
	});
}

export default Component;
