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
		"content": `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.dhtxwjb8m {
  d: path("m2 13 5 -5 5 5Z");
}

.dmi31p3-b {
  fill: currentColor;
  d: path("m2 13 5 -5 5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g5sm_rqnz {
  fill: currentColor;
  d: path("m10 10 6 -6 6 6Z");
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

.uiny5bqrt {
  fill: currentColor;
  d: path("m7 18 5 -5 5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wyx0j3bin {
  d: path("m7 18 5 -5 5 5Z");
}

.x9f8wob1r {
  d: path("m10 10 6 -6 6 6Z");
}
</style><g class="nrj6p8qat"><path class="dmi31p3-b"/><path class="g5sm_rqnz"/><path class="uiny5bqrt"/><path class="dhtxwjb8m"/><path class="x9f8wob1r"/><path class="wyx0j3bin"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:forest-duotone-regular",
	});
}

export default Component;
