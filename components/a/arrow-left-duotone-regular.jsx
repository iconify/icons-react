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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s6jbysbtk {
  d: path("m9 7 -5 5 5 5");
}

.s8_kr602n {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 7 -5 5 5 5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sxlwlmkmh {
  d: path("M4 12h16");
}

.u-kmlrghs {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 12h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="u-kmlrghs"/><path class="s8_kr602n"/><path class="sxlwlmkmh"/><path class="s6jbysbtk"/></g>`,
		"fallback": "iconmind:arrow-left-duotone-regular",
	});
}

export default Component;
