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
		"content": `<style>.cwy6p7vpw {
  d: path("M20 10v10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uso-o7_ft {
  d: path("M2 9a3 3 0 0 1 6 0 3 3 0 0 1 6 0l-6 6Z");
}

.wmg5scbww {
  d: path("M17 14v6");
}
</style><g class="nrj6p8qat"><path class="uso-o7_ft"/><path class="wmg5scbww"/><path class="cwy6p7vpw"/></g>`,
		"fallback": "iconmind:heart-zone-outline-regular",
	});
}

export default Component;
