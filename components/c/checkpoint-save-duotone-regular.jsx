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
		"content": `<style>.c3wl0l-ou {
  d: path("M19 13v6");
}

.e2d65ybwf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16.5 16.5 19 19l2.5 -2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lmzbshh9e {
  d: path("M16.5 16.5 19 19l2.5 -2.5");
}

.ni-_lk7vs {
  d: path("M5 5h10v6H5");
}

.no2cffbmc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 13v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ojq3d2bwe {
  d: path("M5 3v18");
}

.qkrt1qbaa {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 5h10v6H5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vn749yfck {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="vn749yfck"/><path class="qkrt1qbaa"/><path class="no2cffbmc"/><path class="e2d65ybwf"/><path class="ojq3d2bwe"/><path class="ni-_lk7vs"/><path class="c3wl0l-ou"/><path class="lmzbshh9e"/></g>`,
		"fallback": "iconmind:checkpoint-save-duotone-regular",
	});
}

export default Component;
