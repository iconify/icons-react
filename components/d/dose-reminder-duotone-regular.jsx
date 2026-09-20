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
		"content": `<style>.iij8_24og {
  fill: currentColor;
  d: path("m4 11 5 -5a3.5 3.5 0 0 1 5 5l-5 5a3.5 3.5 0 0 1 -5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.k1uyapbnn {
  d: path("M17 14v3h3");
}

.lgsfugb0a {
  fill: currentColor;
  d: path("M13 17a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
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

.rruu58b-y {
  d: path("m4 11 5 -5a3.5 3.5 0 0 1 5 5l-5 5a3.5 3.5 0 0 1 -5 -5");
}

.u6dphkbyx {
  d: path("M13 17a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}
</style><g class="nrj6p8qat"><path class="iij8_24og"/><path class="lgsfugb0a"/><path class="rruu58b-y"/><path class="u6dphkbyx"/><path class="k1uyapbnn"/></g>`,
		"fallback": "iconmind:dose-reminder-duotone-regular",
	});
}

export default Component;
