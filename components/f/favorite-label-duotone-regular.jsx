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
		"content": `<style>.fbde_z08y {
  fill: currentColor;
  d: path("M3 6h10l8 8 -8 8H3Z");
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

.vveeg9k1c {
  fill: currentColor;
  d: path("M9 13.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}

.yy31oxjob {
  d: path("M9 13.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
}
</style><g class="nrj6p8qat"><path class="fbde_z08y"/><path class="vveeg9k1c"/><path class="w3hyiobto"/><path class="yy31oxjob"/></g>`,
		"fallback": "iconmind:favorite-label-duotone-regular",
	});
}

export default Component;
