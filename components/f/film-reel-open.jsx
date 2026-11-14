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

.i9l6mobaz {
  d: path("M2.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.kaodeplnw {
  d: path("M10 17.5h9q2.5 0 2.5 2.5m-13-10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M10 5.5h.01M14 12.25h.01m-8.01 0h.01");
}
</style><g class="hntgybcog"><path class="i9l6mobaz"/><path class="kaodeplnw"/></g>`,
		"fallback": "uix:film-reel-open",
	});
}

export default Component;
