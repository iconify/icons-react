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
		"content": `<style>.b0hkzgbgd {
  d: path("M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.daozqcbby {
  d: path("M13.5 7.5H16v5h-2.5");
}

.ksl-tgqpn {
  d: path("M10.5 7.5H8v5h2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wuk2mlziz {
  d: path("M7 19h10");
}
</style><g class="nrj6p8qat"><path class="b0hkzgbgd"/><path class="ksl-tgqpn"/><path class="daozqcbby"/><path class="wuk2mlziz"/></g>`,
		"fallback": "iconmind:build-arg-outline-regular",
	});
}

export default Component;
