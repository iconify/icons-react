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
		"content": `<style>.c4my-jbpv {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.g4lz7ob4p {
  d: path("M2 16a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgtyhzr6z {
  d: path("M5 6.5h5");
}

.n6-318bus {
  d: path("M5 17.5h5");
}
</style><g class="hntgybcog"><path class="c4my-jbpv"/><path class="jgtyhzr6z"/><path class="g4lz7ob4p"/><path class="n6-318bus"/></g>`,
		"fallback": "iconmind:data-catalog-outline-thin",
	});
}

export default Component;
