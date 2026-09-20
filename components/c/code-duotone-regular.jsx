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
		"content": `<style>.bm-xeqh8c {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m9 6 -6 6 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.faeydrb7z {
  d: path("m15 6 6 6 -6 6");
}

.gzj6tbb2m {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15 6 6 6 -6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.onei9bb8c {
  d: path("m9 6 -6 6 6 6");
}
</style><g class="nrj6p8qat"><path class="bm-xeqh8c"/><path class="gzj6tbb2m"/><path class="onei9bb8c"/><path class="faeydrb7z"/></g>`,
		"fallback": "iconmind:code-duotone-regular",
	});
}

export default Component;
