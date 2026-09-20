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
		"content": `<style>.c7dgfu7wx {
  d: path("M2 4h20");
}

.diaqyhfcp {
  d: path("M10 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n-z4jv76k {
  d: path("M7 4v14h10V4");
}

.qagp93bmg {
  d: path("m9 14 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="c7dgfu7wx"/><path class="n-z4jv76k"/><path class="qagp93bmg"/><path class="diaqyhfcp"/></g>`,
		"fallback": "iconmind:darkroom-outline-thin",
	});
}

export default Component;
