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
		"content": `<style>.d-uxodfwp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 7h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dl9zeb9uy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20 12a8 8 0 0 1 -16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.haaojh5gc {
  d: path("M16 7h4");
}

.kc2bz0p3g {
  d: path("M4 7h4");
}

.kqakbubzd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 7h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mh3_-obpm {
  d: path("M20 12a8 8 0 0 1 -16 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="d-uxodfwp"/><path class="kqakbubzd"/><path class="dl9zeb9uy"/><path class="kc2bz0p3g"/><path class="haaojh5gc"/><path class="mh3_-obpm"/></g>`,
		"fallback": "iconmind:contentment-duotone-regular",
	});
}

export default Component;
