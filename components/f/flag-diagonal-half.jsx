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
		"content": `<style>.d6foahutw {
  d: path("M5 2.5v19m1.5-18h11A1.5 1.5 0 0 1 19 5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 12V5a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q8r-gyb-a {
  fill: currentColor;
  d: path("M6.5 3.5h7.819a1.5 1.5 0 0 1 .872 2.721l-7.819 5.585A1.5 1.5 0 0 1 5 10.585V5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="d6foahutw"/><path class="q8r-gyb-a"/></g>`,
		"fallback": "uix:flag-diagonal-half",
	});
}

export default Component;
