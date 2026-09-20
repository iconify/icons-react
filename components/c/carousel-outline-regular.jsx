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
		"content": `<style>.b-73d8bgy {
  d: path("M16 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.h-6x62mls {
  d: path("M4 7 2 9l2 2");
}

.k-jt90-vx {
  d: path("M11 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.l0ecuoq5i {
  d: path("m20 7 2 2 -2 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ot2i-pb1g {
  d: path("M7 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.ze9yihd5h {
  d: path("M6 20a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="ot2i-pb1g"/><path class="h-6x62mls"/><path class="l0ecuoq5i"/><path class="ze9yihd5h"/><path class="k-jt90-vx"/><path class="b-73d8bgy"/></g>`,
		"fallback": "iconmind:carousel-outline-regular",
	});
}

export default Component;
