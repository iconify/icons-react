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

.o5r_prbgx {
  d: path("M2 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.olma08bid {
  d: path("m13 17 2.5 2.5L20 15");
}

.stgd0ptpl {
  d: path("m9.5 9.5 3 3");
}

.zc7-aybrt {
  fill: currentColor;
  d: path("M2 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="zc7-aybrt"/><path class="o5r_prbgx"/><path class="stgd0ptpl"/><path class="olma08bid"/></g>`,
		"fallback": "iconmind:evaluate-step-duotone-regular",
	});
}

export default Component;
