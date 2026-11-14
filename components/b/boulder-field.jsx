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

.rpvqzgbfy {
  d: path("m7 18l1-7.5L11.5 6l4 1.5L17 18");
}

.tq9nzrcgy {
  d: path("m2.5 18l.75-3.5l2.25-1l1.75 2.75m9.25-1.75l2.5-1.25L21 15l.5 3m-19 0h19");
}
</style><g class="hntgybcog"><path class="rpvqzgbfy"/><path class="tq9nzrcgy"/></g>`,
		"fallback": "uix:boulder-field",
	});
}

export default Component;
