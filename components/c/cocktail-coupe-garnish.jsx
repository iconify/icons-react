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

.nkzbywbql {
  d: path("M15.5 5.5C16.5 3 21 3 20.5 7c-.25 2-2 2.5-1.5 4.5c.25 1 1.5 1.5 2 1.5");
}

.taim4w9pj {
  d: path("M3 5.5h15a7.5 5.5 0 0 1-15 0m7.5 5.5v9.5m-4 0h8");
}
</style><g class="hntgybcog"><path class="taim4w9pj"/><path class="nkzbywbql"/></g>`,
		"fallback": "uix:cocktail-coupe-garnish",
	});
}

export default Component;
