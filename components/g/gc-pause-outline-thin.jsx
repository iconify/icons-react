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
		"content": `<style>.e69i7fcek {
  d: path("M17 12h5");
}

.e7pgrp-wx {
  d: path("M2 12h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rutulxlvn {
  d: path("M14 7v10");
}

.wp75hkmty {
  d: path("M11 7v10");
}
</style><g class="hntgybcog"><path class="e7pgrp-wx"/><path class="wp75hkmty"/><path class="rutulxlvn"/><path class="e69i7fcek"/></g>`,
		"fallback": "iconmind:gc-pause-outline-thin",
	});
}

export default Component;
