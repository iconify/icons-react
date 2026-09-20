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
		"content": `<style>.cajt03bfr {
  d: path("m4 20 5 -5");
}

.cktduhxcf {
  d: path("M8.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}

.el3g3frja {
  d: path("m15 9 5 -5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="cajt03bfr"/><path class="cktduhxcf"/><path class="el3g3frja"/></g>`,
		"fallback": "iconmind:git-commit-outline-thin",
	});
}

export default Component;
