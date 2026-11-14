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
		"content": `<style>.bruwbqbmb {
  d: path("M10.5 5.5a8 8 0 1 0 8 8h-8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yz78o-bsh {
  d: path("M13.25 2.75a8 8 0 0 1 8 8h-8ZM2.5 13.5h8m0 0v8");
}
</style><g class="hntgybcog"><path class="bruwbqbmb"/><path class="yz78o-bsh"/></g>`,
		"fallback": "uix:bnpl-split-four",
	});
}

export default Component;
