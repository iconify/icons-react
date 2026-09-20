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
		"content": `<style>.l8unaacgj {
  d: path("M2 12h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s91z9mxxg {
  d: path("M22 12h-5");
}

.un7y1tbrs {
  d: path("m4 10 -2 2 2 2");
}

.x909-s8qx {
  d: path("m20 10 2 2 -2 2");
}

.zey5ebc0a {
  d: path("M7 12a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}
</style><g class="nrj6p8qat"><path class="zey5ebc0a"/><path class="l8unaacgj"/><path class="un7y1tbrs"/><path class="s91z9mxxg"/><path class="x909-s8qx"/></g>`,
		"fallback": "iconmind:breathe-out-outline-regular",
	});
}

export default Component;
