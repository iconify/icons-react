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
		"content": `<style>.einbtqqgb {
  d: path("M7 12h13");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mldnorr-p {
  d: path("M7 17h13");
}

.r3faxubne {
  d: path("M4 4v16");
}

.rxxtm7qkj {
  d: path("M7 7h13");
}
</style><g class="hntgybcog"><path class="r3faxubne"/><path class="rxxtm7qkj"/><path class="einbtqqgb"/><path class="mldnorr-p"/></g>`,
		"fallback": "iconmind:index-outline-thin",
	});
}

export default Component;
