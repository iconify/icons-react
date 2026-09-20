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
		"content": `<style>.dahw1rbat {
  d: path("M18 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.dhm9wy0nm {
  d: path("M3 5h10");
}

.e6q34etyy {
  d: path("M16 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pt0xyi7kd {
  d: path("M3 17h10");
}

.wy8f0maog {
  d: path("M3 11h10");
}
</style><g class="nrj6p8qat"><path class="dhm9wy0nm"/><path class="wy8f0maog"/><path class="pt0xyi7kd"/><path class="e6q34etyy"/><path class="dahw1rbat"/></g>`,
		"fallback": "iconmind:context-precision-outline-regular",
	});
}

export default Component;
