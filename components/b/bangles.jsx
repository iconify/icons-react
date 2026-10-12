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
		"content": `<style>.ef4cwjf3a {
  d: path("M3.5 13.75a8.5 3.25 0 0 0 17 0");
}

.glc8cfbam {
  d: path("M3.5 10.75a8.5 3.25 0 0 0 17 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vhqqabc1k {
  d: path("M3.5 16.75a8.5 3.25 0 0 0 17 0");
}

.vlwa6_b_j {
  d: path("M3.5 7.5a8.5 3.25 0 1 0 17 0a8.5 3.25 0 1 0-17 0");
}
</style><g class="hntgybcog"><path class="vlwa6_b_j"/><path class="glc8cfbam"/><path class="ef4cwjf3a"/><path class="vhqqabc1k"/></g>`,
		"fallback": "iconoven:bangles",
	});
}

export default Component;
