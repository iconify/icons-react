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
		"content": `<style>.irg-3bbix {
  fill: currentColor;
  d: path("M9 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lrtehacrs {
  d: path("m6 9 3 3 -3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pmd2fdz0m {
  d: path("M9 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2Z");
}

.wj4cfmbhq {
  d: path("M2 12h7");
}
</style><g class="nrj6p8qat"><path class="irg-3bbix"/><path class="pmd2fdz0m"/><path class="wj4cfmbhq"/><path class="lrtehacrs"/></g>`,
		"fallback": "iconmind:context-injection-duotone-regular",
	});
}

export default Component;
