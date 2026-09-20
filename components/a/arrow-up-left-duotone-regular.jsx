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
		"content": `<style>.fowtb39ss {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 14V4h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.olzfpgbos {
  d: path("M4 14V4h10");
}

.pilb5jbne {
  d: path("M20 20 4 4");
}

.pvmkd1buc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20 20 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="pvmkd1buc"/><path class="fowtb39ss"/><path class="pilb5jbne"/><path class="olzfpgbos"/></g>`,
		"fallback": "iconmind:arrow-up-left-duotone-regular",
	});
}

export default Component;
