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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.ghf6zpb7j {
  d: path("M14 12v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k7u-15-va {
  d: path("M10 12v6");
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}
</style><g class="hntgybcog"><path class="mcubrkb2y"/><path class="k7u-15-va"/><path class="ghf6zpb7j"/><path class="c4khiwgvb"/></g>`,
		"fallback": "iconmind:account-number-outline-thin",
	});
}

export default Component;
