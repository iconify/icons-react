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

.m-xwz8bhd {
  d: path("M10.5 4H13a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h2.5");
}

.owdk3hf1a {
  d: path("m18 8 4 4 -4 4");
}

.svxe_qcjd {
  fill: currentColor;
  d: path("M10.5 4H13a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x26a8iq1c {
  d: path("M2 12h20");
}
</style><g class="hntgybcog"><path class="svxe_qcjd"/><path class="m-xwz8bhd"/><path class="x26a8iq1c"/><path class="owdk3hf1a"/></g>`,
		"fallback": "iconmind:gateway-duotone-thin",
	});
}

export default Component;
