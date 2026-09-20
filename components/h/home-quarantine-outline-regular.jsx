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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hwufvfb8q {
  d: path("M3 20v-8l9 -9 9 9v8Z");
}

.jwect0b8c {
  d: path("M8 18a4 4 0 0 1 8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hwufvfb8q"/><path class="bo51iypxr"/><path class="jwect0b8c"/></g>`,
		"fallback": "iconmind:home-quarantine-outline-regular",
	});
}

export default Component;
