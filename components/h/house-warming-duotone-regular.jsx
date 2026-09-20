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
		"content": `<style>.m-yo_2b4g {
  fill: currentColor;
  d: path("M4 19v-7l7 -7 7 7v7Z");
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

.rsz3y4a_c {
  d: path("M4 19v-7l7 -7 7 7v7Z");
}

.syw8dymcb {
  fill: currentColor;
  d: path("M11 16c-2 -1 -2 -4 0 -5 2 1 2 4 0 5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.u-niy3p1t {
  d: path("M11 16c-2 -1 -2 -4 0 -5 2 1 2 4 0 5");
}
</style><g class="nrj6p8qat"><path class="m-yo_2b4g"/><path class="syw8dymcb"/><path class="rsz3y4a_c"/><path class="u-niy3p1t"/></g>`,
		"fallback": "iconmind:house-warming-duotone-regular",
	});
}

export default Component;
