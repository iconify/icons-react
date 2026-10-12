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
		"content": `<style>.a1sjpmb7n {
  d: path("M9.25 8.25c2.75.5 4.75 2.5 5.25 5.25L12 21.25m2.5-7.75l2.5 7.75m-7.5-12L7.75 14M19.5 5.25L17.25 8.5h3L18 11.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l6ygoqbfm {
  cx: 7.75px;
  cy: 4.75px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="l6ygoqbfm"/><path class="a1sjpmb7n"/></g>`,
		"fallback": "iconoven:back-pain",
	});
}

export default Component;
