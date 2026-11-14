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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-6rcyi-h {
  d: path("M2.5 11.5a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0M11 20h10.5");
}

.i2qq77fsg {
  d: path("M8.5 11.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.ox9v0_z-p {
  d: path("M11 6a5.5 5.5 0 1 1-5.5 5.5");
}
</style><g class="hntgybcog"><path class="i-6rcyi-h"/><path class="i2qq77fsg"/><path class="ox9v0_z-p"/></g>`,
		"fallback": "uix:cable-drum",
	});
}

export default Component;
