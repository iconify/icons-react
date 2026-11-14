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

.uyptn0bml {
  d: path("M7 4.5h10A3.5 3.5 0 0 1 20.5 8v9a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V8A3.5 3.5 0 0 1 7 4.5m-3.5 6h17m-17 5h17");
}

.zwjedjblj {
  d: path("m9 4.5l3 3l3-3");
}
</style><g class="hntgybcog"><path class="uyptn0bml"/><path class="zwjedjblj"/></g>`,
		"fallback": "uix:folded-clothes",
	});
}

export default Component;
