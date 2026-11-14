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
		"content": `<style>.bt29w2b2n {
  d: path("M4.5 19A2.5 2.5 0 0 1 7 16.5h12.5M8.25 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m0 0h9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n13x6dbmu {
  d: path("M4.5 19V5A2.5 2.5 0 0 1 7 2.5h12.5v19H7A2.5 2.5 0 0 1 4.5 19");
}

.yrcp9tb9b {
  d: path("M10.75 10a2 4.5 0 1 0 4 0a2 4.5 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="n13x6dbmu"/><path class="bt29w2b2n"/><path class="yrcp9tb9b"/></g>`,
		"fallback": "uix:atlas",
	});
}

export default Component;
