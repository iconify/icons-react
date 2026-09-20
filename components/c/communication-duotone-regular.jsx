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
		"content": `<style>.f9zkr6_8j {
  d: path("M9 17a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4 4 4 0 0 1 -4 4h-5a4 4 0 0 1 -4 -4");
}

.grk37x-os {
  d: path("M5 11v3l3 -3");
}

.kscrclbnc {
  d: path("M19 13v-3l-3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qvgnc-lug {
  fill: currentColor;
  d: path("M9 17a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4 4 4 0 0 1 -4 4h-5a4 4 0 0 1 -4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y-c_3vbcr {
  d: path("M2 7a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4 4 4 0 0 1 -4 4H6a4 4 0 0 1 -4 -4");
}

.z_tq0010d {
  fill: currentColor;
  d: path("M2 7a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4 4 4 0 0 1 -4 4H6a4 4 0 0 1 -4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="z_tq0010d"/><path class="qvgnc-lug"/><path class="y-c_3vbcr"/><path class="grk37x-os"/><path class="f9zkr6_8j"/><path class="kscrclbnc"/></g>`,
		"fallback": "iconmind:communication-duotone-regular",
	});
}

export default Component;
