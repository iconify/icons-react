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
		"content": `<style>.c-3ha-fmf {
  d: path("M4 5a3.25 1.5 0 1 0 6.5 0A3.25 1.5 0 1 0 4 5m6.5 14.5Q12 21 14 21h3.75a2.25 2.25 0 0 0 0-4.5H16.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zmjc42b1y {
  d: path("M4 5v14.5a3.25 1.5 0 0 0 6.5 0V5");
}
</style><g class="hntgybcog"><path class="zmjc42b1y"/><path class="c-3ha-fmf"/></g>`,
		"fallback": "uix:gift-wrap-roll",
	});
}

export default Component;
