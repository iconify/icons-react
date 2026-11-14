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
		"content": `<style>.hfqtzjb6y {
  d: path("M2.5 18q7-18 14 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-6yyzbtz {
  d: path("M13 11.25C15 6 20 4 21.5 18m-19 0h19");
}
</style><g class="hntgybcog"><path class="hfqtzjb6y"/><path class="r-6yyzbtz"/></g>`,
		"fallback": "uix:hill-pair",
	});
}

export default Component;
