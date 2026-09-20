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
		"content": `<style>.a6m5kfb7k {
  d: path("M18 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uk0rveqaj {
  d: path("M4 7a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.vbvr2ebxa {
  d: path("M7 6c4 0 8 2 8 6s-4 7 -8 8");
}

.xcm-54bzl {
  d: path("M18 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="vbvr2ebxa"/><path class="uk0rveqaj"/><path class="xcm-54bzl"/><path class="a6m5kfb7k"/></g>`,
		"fallback": "iconmind:bass-clef-outline-thin",
	});
}

export default Component;
