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
		"content": `<style>.ai7mlsqqn {
  d: path("M15 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.g28i6yb7h {
  fill: currentColor;
  d: path("M5 8a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mftdaepvv {
  fill: currentColor;
  d: path("M7 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n0k4ov7kr {
  d: path("M7 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ns_-3dj2i {
  fill: currentColor;
  d: path("M15 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.oz4rn3bss {
  d: path("M5 8a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.u-a-7fbnu {
  d: path("M10 6V3h4v3");
}
</style><g class="nrj6p8qat"><path class="g28i6yb7h"/><path class="mftdaepvv"/><path class="ns_-3dj2i"/><path class="oz4rn3bss"/><path class="u-a-7fbnu"/><path class="n0k4ov7kr"/><path class="ai7mlsqqn"/></g>`,
		"fallback": "iconmind:carry-on-duotone-regular",
	});
}

export default Component;
