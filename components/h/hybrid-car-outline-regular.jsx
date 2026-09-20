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
		"content": `<style>.du3agkbjb {
  d: path("M5 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fquh7rbnp {
  d: path("M15 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.g1f25e5hj {
  d: path("M15.5 10 13 12.5h5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sqwju3bsh {
  d: path("M2 16V8.5h4L9.5 5h5L18 8.5h4V16Z");
}

.zd14f4bwm {
  d: path("m11 10 -2.5 2.5H11L8.5 15");
}
</style><g class="nrj6p8qat"><path class="sqwju3bsh"/><path class="du3agkbjb"/><path class="fquh7rbnp"/><path class="zd14f4bwm"/><path class="g1f25e5hj"/></g>`,
		"fallback": "iconmind:hybrid-car-outline-regular",
	});
}

export default Component;
