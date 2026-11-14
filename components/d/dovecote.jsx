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
		"content": `<style>.atax_onuf {
  d: path("M10 12.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 5.5v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o_nawgbcx {
  d: path("m4 10l8-7l8 7");
}

.u_f-byj6m {
  d: path("M6 8.25V18h12V8.25");
}
</style><g class="hntgybcog"><path class="o_nawgbcx"/><path class="u_f-byj6m"/><path class="atax_onuf"/></g>`,
		"fallback": "uix:dovecote",
	});
}

export default Component;
