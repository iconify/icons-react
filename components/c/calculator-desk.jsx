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
		"content": `<style>.byiodibqq {
  width: 14px;
  height: 18.5px;
  x: 5px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.f7neuybxg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 12h.01M15 12h.01M9 17h.01M15 17h.01");
}

.o9x09f-yf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6.5h8");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="byiodibqq"/><path class="o9x09f-yf"/><path class="f7neuybxg"/></g>`,
		"fallback": "iconoven:calculator-desk",
	});
}

export default Component;
