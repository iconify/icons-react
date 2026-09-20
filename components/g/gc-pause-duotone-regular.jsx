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
		"content": `<style>.c587bq8qn {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e69i7fcek {
  d: path("M17 12h5");
}

.e7pgrp-wx {
  d: path("M2 12h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pqgcmcahi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rutulxlvn {
  d: path("M14 7v10");
}

.tt1n5wbag {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M17 12h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wp75hkmty {
  d: path("M11 7v10");
}

.x9zn9l6tg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pqgcmcahi"/><path class="c587bq8qn"/><path class="x9zn9l6tg"/><path class="tt1n5wbag"/><path class="e7pgrp-wx"/><path class="wp75hkmty"/><path class="rutulxlvn"/><path class="e69i7fcek"/></g>`,
		"fallback": "iconmind:gc-pause-duotone-regular",
	});
}

export default Component;
