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
		"content": `<style>.h96z1abos {
  d: path("M2.5 19.5C5.25 19.5 6.5 6 8 6s2.75 13.5 5.5 13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l2bd0lb6o {
  d: path("M6.5 19.5c2.75 0 4-9.5 5.5-9.5s2.75 9.5 5.5 9.5");
}

.ynp6q9bkm {
  d: path("M10.5 19.5c2.75 0 4-15 5.5-15s2.75 15 5.5 15m-19 1h19");
}
</style><g class="hntgybcog"><path class="h96z1abos"/><path class="l2bd0lb6o"/><path class="ynp6q9bkm"/></g>`,
		"fallback": "uix:anova",
	});
}

export default Component;
